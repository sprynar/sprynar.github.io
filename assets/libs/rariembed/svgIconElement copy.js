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
import { LitElement, svg } from 'lit';
import { customElement } from 'lit/decorators.js';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let SVGDollarIcon = class SVGDollarIcon extends LitElement {
    render() {
        return svg `
        <?xml version="1.0" encoding="UTF-8"?>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30pt" height="30pt" viewBox="0 0 30 30" version="1.1">
        <g id="surface1">
        <path style=" stroke:none;fill-rule:nonzero;fill:rgb(54.117647%,57.254902%,69.803922%);fill-opacity:1;" d="M 14.996094 1.261719 L 6.5625 15.253906 L 14.996094 11.421875 Z M 14.996094 1.261719 "/>
        <path style=" stroke:none;fill-rule:nonzero;fill:rgb(38.431373%,40.784314%,56.078431%);fill-opacity:1;" d="M 14.996094 11.421875 L 6.5625 15.253906 L 14.996094 20.242188 Z M 14.996094 11.421875 "/>
        <path style=" stroke:none;fill-rule:nonzero;fill:rgb(38.431373%,40.784314%,56.078431%);fill-opacity:1;" d="M 23.429688 15.253906 L 14.996094 1.261719 L 14.996094 11.421875 Z M 23.429688 15.253906 "/>
        <path style=" stroke:none;fill-rule:nonzero;fill:rgb(27.058824%,29.019608%,45.882353%);fill-opacity:1;" d="M 14.996094 20.242188 L 23.429688 15.253906 L 14.996094 11.421875 Z M 14.996094 20.242188 "/>
        <path style=" stroke:none;fill-rule:nonzero;fill:rgb(54.117647%,57.254902%,69.803922%);fill-opacity:1;" d="M 6.5625 16.855469 L 14.996094 28.738281 L 14.996094 21.835938 Z M 6.5625 16.855469 "/>
        <path style=" stroke:none;fill-rule:nonzero;fill:rgb(38.431373%,40.784314%,56.078431%);fill-opacity:1;" d="M 14.996094 21.835938 L 14.996094 28.738281 L 23.4375 16.855469 Z M 14.996094 21.835938 "/>
        </g>
        </svg>
        `;
    }
};
SVGDollarIcon = __decorate([
    customElement('svg-dollar-icon')
], SVGDollarIcon);
export { SVGDollarIcon };
//# sourceMappingURL=svgIconElement copy.js.map