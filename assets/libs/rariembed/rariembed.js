/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getItemDetails, getOwnershipByItem, getOwnerDetails, } from './api/rarible';
// import './svgIconElement'
// import './svgDollarElement'
import './loaderElement';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
const CARD_HEIGHT = '210px';
const CARD_WIDTH = '80vw';
let RariEmbed = class RariEmbed extends LitElement {
    constructor() {
        super(...arguments);
        this.tokenAddress = '';
        this.contractAddress = '';
        this.tokenId = '';
        this.blockchain = 'ETHEREUM';
        this.width = '700px';
        this.height = '250px';
        this.name = '';
        this.illustrationUrl = '';
        this.illustrationType = '';
        this.objAttributes = [];
        this.collectionId = '';
        this.collectionName = '';
        this.collectionAvatar = '';
        this.ownerId = '';
        this.ownerName = '';
        this.ownerAvatar = '';
        this.owners = [];
        this.cryptoPrice = '';
        this.cryptoCurrency = '';
        this.usdPrice = '';
        this.forSale = false;
        this.saleType = '';
        this.loading = true;
        this.darkMode = false;
        // private _onClick() {
        //   // this.count++;
        // }
    }
    async connectedCallback() {
        super.connectedCallback();
        this.blockchain = this.blockchain.toUpperCase();
        this.width = this.width ? this.width : CARD_WIDTH;
        this.height = this.height ? this.height : CARD_HEIGHT;
        //   ? this.height
        //   : this.horizontal
        //   ? HORIZONTAL_CARD_HEIGHT
        //   : VERT_CARD_HEIGHT
        // this.minHeight = this.horizontal
        //   ? HORIZONTAL_MIN_CARD_HEIGHT
        //   : VERT_MIN_CARD_HEIGHT
        // this.maxWidth = this.horizontal ? HORIZONTAL_CARD_MAX_WIDTH : ''
        //call Rarible API to get details
        // get item detail
        // console.log([`${this.tokenAddress}:${this.tokenId}`]);
        try {
            let details = await getItemDetails(this.tokenAddress, this.tokenId, this.blockchain);
            // console.log('DDDETAILS', details);
            let { meta, contract } = details;
            let { name, attributes, content } = meta;
            this.name = name;
            this.contractAddress = contract;
            this.objAttributes = attributes;
            //find an image if not found check for video
            let illustration = content.find((e) => (e.representation === 'PREVIEW' || e.representation === 'ORIGINAL'));
            if (illustration) {
                this.illustrationUrl = illustration.url;
                this.illustrationType = illustration['@type'];
                if (illustration.url.indexOf('ipfs://ipfs') > -1) { //not support ipfs
                    if (illustration['@type'] === 'IMAGE') {
                        this.illustrationUrl = `https://img.rarible.com/prod/image/upload/t_big/prod-itemImages/${details.id.replace(':', '-')}`;
                    }
                    else if (illustration['@type'] === 'VIDEO') {
                        this.illustrationUrl = `https://img.rarible.com/prod/video/upload/t_big/prod-itemAnimations/${details.id.replace(':', '-')}`;
                    }
                }
            }
            //filter the preview entry
            // this.imageUrl = content.find(
            //   (e: {representation: string; '@type': string}) =>
            //     (e.representation === 'PREVIEW' || e.representation === 'ORIGINAL') &&
            //     e['@type'] === 'IMAGE'
            // ).url;
            //is item for sale
            if (typeof details.bestBidOrder != 'undefined') {
                // console.log("BID")
                this.forSale = true;
                this.saleType = 'bid';
                let sale = details.bestBidOrder;
                this.cryptoPrice = sale.takePrice;
                this.usdPrice = sale.takePriceUsd;
                this.cryptoCurrency = details.blockchain; //sale.take.type['@type'];
            }
            else if (typeof details.bestSellOrder != 'undefined') {
                // console.log("SEELLLL")
                this.forSale = true;
                this.saleType = 'sale';
                let sale = details.bestSellOrder;
                this.cryptoPrice = sale.makePrice;
                this.usdPrice = sale.makePriceUsd;
                this.cryptoCurrency = details.blockchain; //sale.take.type['@type'];
            }
        }
        catch (e) {
            console.log('SOMETHING WENT WRONG', e);
        }
        try {
            let owners = await getOwnershipByItem(this.tokenAddress, this.tokenId, this.blockchain);
            if (owners && owners.length > 0) {
                let ownersId = owners.map((o) => o.owner);
                let ownerDetails = await getOwnerDetails(ownersId.slice(0, 3)); //only show first 3 owners
                console.log('ownerDetails', ownerDetails);
                this.owners = ownerDetails.map((o) => {
                    return {
                        name: o.name || (o.id.slice(0, 5) + '...'),
                        id: o.id,
                        shortUrl: o.shortUrl || '',
                        verified: o.badges.indexOf('VERIFIED') > -1 ? true : false,
                        avatar: o.image
                            ? `https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/${o.id}/avatar/${o.image.replaceAll('ipfs://ipfs/', '')}`
                            : 'https://theme.zdassets.com/theme_assets/10342982/bb8d2a7ec0e54ad27a114410b18e9716a3bf9883.png'
                    };
                });
            }
        }
        catch (e) {
            console.log('SOMETHING WENT WRONG', e);
        }
        // get collection detail
        // console.log(
        //   `https://hyd07vaa2c.execute-api.us-east-1.amazonaws.com/mainnet/marketplace/api/v4/collections/${this.blockchain}-${this.tokenAddress}`
        // );
        await fetch(`https://hyd07vaa2c.execute-api.us-east-1.amazonaws.com/mainnet/marketplace/api/v4/collections/${this.blockchain}-${this.tokenAddress}`)
            .then((response) => response.json())
            .then((response) => {
            if (response.status >= 400 && response.status < 600) {
                throw new Error(`RARIBLE API ERROR: ${response.error}`);
            }
            return response;
        })
            .then((res) => {
            // console.log('res collectionDetail', res);
            this.collectionName = res.name;
            this.collectionAvatar = res.pic
                ? `https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/${this.contractAddress.replace(':', '-')}/avatar/${res.pic.replaceAll('ipfs://ipfs/', '')}`
                : 'https://theme.zdassets.com/theme_assets/10342982/bb8d2a7ec0e54ad27a114410b18e9716a3bf9883.png';
        })
            .catch((error) => {
            // Your error is here!
            console.log('error', error);
        });
        this.loading = false;
    }
    renderLoader() {
        console.log('loader');
        return html ` <loader-element></loader-element> `;
    }
    getCurrencySymbol(currency) {
        let result = {
            symbol: 'Ξ',
            name: 'ETH'
        };
        switch (currency) {
            case 'ETHEREUM':
                result = {
                    symbol: 'Ξ',
                    name: 'ETH'
                };
                break;
            case 'FLOW':
                result = {
                    symbol: 'F',
                    name: 'FLOW'
                };
                break;
            case 'TEZOS':
                result = {
                    symbol: 'F',
                    name: 'XTZ'
                };
                break;
            default:
                return {
                    symbol: 'Ξ',
                    name: 'ETH'
                };
        }
        return result;
    }
    renderPrice(forSale) {
        if (forSale) {
            return html `
        <div class="flex" style="align-items: center; gap: 2em;">
          <span style="font-size:25px;">${parseFloat(this.cryptoPrice).toFixed(2)} ${this.getCurrencySymbol(this.cryptoCurrency).name}</span>
          <span style="color:grey;">$${parseFloat(this.usdPrice).toFixed(2)} USD</span>
        </div>
      `;
        }
        else {
            return html `<div class="flex"><p>Not for sale</p></div>`;
        }
    }
    renderCard() {
        return html ` <div class="asset-container">
        <a
          href="https://rarible.com/token/${this.tokenAddress}:${this.tokenId}"
        >
        ${this.illustrationType === 'IMAGE'
            ? html `<img src="${this.illustrationUrl}" alt="${this.name}" title="${this.name}" /> `
            : html `<video loop autoplay muted height="100%" alt="${this.name}" title="${this.name}"><source src="${this.illustrationUrl}" type="video/mp4">Your browser does not support the video tag</video>`}
        </a>
      </div>
      <div class="details">
        <div class="ownershipAndCollection">
          <div>
            <span class="sectionHeader">Collection</span>
            <div class="collection">
              <div class="flex avatar-container">
                <img
                  class="avatar"
                  src="${this.collectionAvatar}"
                  alt="${this.collectionName}"
                  title="${this.collectionName}"
                />
              </div>
              <div class="desc-container">
                <a
                  href="https://rarible.com/collection/${this.tokenAddress}"
                  target="_blank"
                >
                  <span>${this.collectionName}</span>
                </a>
              </div>
            </div>
          </div>
          ${this.owners && this.owners.length > 0
            ? html `
                <div>
                  <span class="sectionHeader">Owner</span>
                  <div class="collection">
                  ${this.owners.map((owner) => html `<div class="flex avatar-container">
                        <img
                          class="avatar"
                          src="${owner.avatar}"
                          alt="${owner.name}"
                          title="${owner.name}"
                        />
                        ${owner.verified ?
                html `<svg class="verifiedIcon" width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>`
                : ''}
                      </div>
                      <div class="desc-container">
                        <a
                          href="https://rarible.com/users/${owner.shortUrl || owner.id}"
                          target="_blank"
                        >
                          <span>${owner.name}</span>
                        </a>
                      </div>`)}
                  </div>
                </div>
              `
            : ''}
        </div>
        <!-- end ownershipandcollection -->
        <div class="flex">
          <p>${this.name}</p>
        </div>
        ${this.renderPrice(this.forSale)}
        <div style="margin-top: 2em;">
          <button class="button">
            <a
              target="_blank"
              href="https://rarible.com/token/${this.tokenAddress}:${this
            .tokenId}"
              >See on Rarible ❯</a
            >
          </button>
        </div>
      </div>`;
    }
    render() {
        return html `
      <style>
        @font-face {
          font-weight: 100;
          font-family: 'Circular Std';
          src: local('Circular Std Medium'),
            url(https://rarible.com/fb3a34fc1c30b5120300.woff) format('woff'),
            url(https://rarible.com/9eac4707a63fe42da7d6.woff2) format('woff2');
        }

        @font-face {
          font-weight: 700;
          font-family: 'Circular Std';
          src: local('Circular Std Black'),
            url(https://rarible.com/4af43345ede3fd952823.woff) format('woff'),
            url(https://rarible.com/0dd92fa15d777f537028.woff2) format('woff2');
        }
      </style>
      <div
        class="card ${this.darkMode ? 'dark' : 'white'}"
        style="width: ${this.width}; height: ${this.height}"
      >
        ${this.loading ? this.renderLoader() : this.renderCard()}
      </div>
    `;
    }
};
RariEmbed.styles = css `
    .dark {
      background-color: rgb(18, 18, 18);
      color: rgb(255, 255, 255);
    }

    .white {
      background-color: rgb(255, 255, 255);
    }
    .card {
      border-radius: 16px;
      max-width: 800px;
      max-height: 250px;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-family: 'Circular Std', Helvetica, Arial, sans-serif;
      box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);
    }

    .asset-container {
      border-right: 1px solid rgba(4, 4, 5, 0.1);
      // max-height: 250px;
      height: 100%;
    }

    .asset-image {
      background-size: contain;
      background-position: 50%;
      background-repeat: no-repeat;
      height: 100%;
      box-sizing: border-box;
    }

    .asset-container img {
      border-top-left-radius: 16px;
      border-bottom-left-radius: 16px;
      height: 100%;
    }

    .asset-container video {
      border-top-left-radius: 16px;
      border-bottom-left-radius: 16px;
      height: 100%;
    }

    .details {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 1em;
    }
    .collection {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .avatar {
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 40px;
    }

    .avatar-container{
      position: relative;
    }

    .verifiedIcon{
      position: absolute;
      bottom: 0px;
      right: 0px;
    }

    .desc-container {
      margin-left: 10px;
    }

    .desc-container span {
      font-weight: 900;
      font-size: 15px;
    }

    .sectionHeader {
      font-weight: 400;
      font-size: 13px;
    }

    .flex {
      display: flex;
    }

    .ownershipAndCollection {
      display: inline-flex;
      flex-wrap: wrap;
      gap: 15px;
      // justify-content: space-around;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    .button {
      border: none;
      width: 100%;
      background-color: #fdd902;
      border-radius: 6px;
      color: black;
      margin-right: 10px;
      padding: 10px 10px 10px 10px;
      text-transform: uppercase;
    }

    .button:hover {
      color: #fdd902;
      background-color: black;
    }
  `;
__decorate([
    property({ type: String })
], RariEmbed.prototype, "tokenAddress", void 0);
__decorate([
    property({ type: String })
], RariEmbed.prototype, "contractAddress", void 0);
__decorate([
    property({ type: String })
], RariEmbed.prototype, "tokenId", void 0);
__decorate([
    property({ type: String })
], RariEmbed.prototype, "blockchain", void 0);
__decorate([
    property({ type: String })
], RariEmbed.prototype, "width", void 0);
__decorate([
    property({ type: String })
], RariEmbed.prototype, "height", void 0);
__decorate([
    property({ type: String })
], RariEmbed.prototype, "name", void 0);
__decorate([
    property({ type: String })
], RariEmbed.prototype, "illustrationUrl", void 0);
__decorate([
    property({ type: String })
], RariEmbed.prototype, "illustrationType", void 0);
__decorate([
    property({ type: Array })
], RariEmbed.prototype, "objAttributes", void 0);
__decorate([
    property({ type: String })
], RariEmbed.prototype, "collectionId", void 0);
__decorate([
    property({ type: String })
], RariEmbed.prototype, "collectionName", void 0);
__decorate([
    property({ type: String })
], RariEmbed.prototype, "collectionAvatar", void 0);
__decorate([
    property({ type: String })
], RariEmbed.prototype, "ownerId", void 0);
__decorate([
    property({ type: String })
], RariEmbed.prototype, "ownerName", void 0);
__decorate([
    property({ type: String })
], RariEmbed.prototype, "ownerAvatar", void 0);
__decorate([
    property({ type: [] })
], RariEmbed.prototype, "owners", void 0);
__decorate([
    property({ type: String })
], RariEmbed.prototype, "cryptoPrice", void 0);
__decorate([
    property({ type: String })
], RariEmbed.prototype, "cryptoCurrency", void 0);
__decorate([
    property({ type: String })
], RariEmbed.prototype, "usdPrice", void 0);
__decorate([
    property({ type: Boolean })
], RariEmbed.prototype, "forSale", void 0);
__decorate([
    property({ type: String })
], RariEmbed.prototype, "saleType", void 0);
__decorate([
    property({ type: Boolean })
], RariEmbed.prototype, "loading", void 0);
__decorate([
    property({ type: Boolean })
], RariEmbed.prototype, "darkMode", void 0);
RariEmbed = __decorate([
    customElement('rari-embed')
], RariEmbed);
export { RariEmbed };
//# sourceMappingURL=rariembed.js.map