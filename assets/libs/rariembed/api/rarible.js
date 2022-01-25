const RARIBLE_BASEURL = 'https://api.rarible.org/v0.1';
const RARIBLE_MARKETPLACE_URL = 'https://api-mainnet.rarible.com/marketplace/api/v4';
export async function getItemDetails(contractAddr, tokenId, blockchain = 'ETHEREUM') {
    let itemId = `${blockchain.toUpperCase()}:${contractAddr}:${tokenId}`;
    return await fetch(`${RARIBLE_BASEURL}/items/${itemId}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json;',
        },
    })
        .then((response) => response.json())
        .then((response) => {
        if (response.status >= 400 && response.status < 600) {
            throw new Error(`RARIBLE API ERROR: ${response.error}`);
        }
        return response;
    })
        .then((res) => {
        return res;
    })
        .catch((error) => {
        // Your error is here!
        console.log('error', error);
        throw new Error('RARIBLE API' + error);
    });
}
export async function getOwnershipByItem(contractAddr, tokenId, blockchain = 'ETHEREUM') {
    let itemId = `${blockchain.toUpperCase()}:${contractAddr}:${tokenId}`;
    return await fetch(`${RARIBLE_BASEURL}/ownerships/byItem?itemId=${itemId}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json;',
        },
    })
        .then((response) => response.json())
        .then((response) => {
        if (response.status >= 400 && response.status < 600) {
            throw new Error(`RARIBLE API ERROR: ${response.error}`);
        }
        return response;
    })
        .then((res) => {
        return res.ownerships;
    })
        .catch((error) => {
        // Your error is here!
        console.log('error', error);
        throw new Error('RARIBLE API' + error);
    });
}
export async function getOwnerDetails(ownersIds) {
    let owners = ownersIds.map((o) => o.replace(':', '-'));
    return await fetch(`${RARIBLE_MARKETPLACE_URL}/profiles/list`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json;',
        },
        body: JSON.stringify(owners),
    })
        .then((response) => response.json())
        .then((response) => {
        if (response.status >= 400 && response.status < 600) {
            throw new Error(`getOwnerDetails RARIBLE API ERROR: ${response.error}`);
        }
        return response;
    })
        .then((res) => {
        return res;
    })
        .catch((error) => {
        // Your error is here!
        console.log('error', error);
        throw new Error('getOwnerDetails RARIBLE API' + error);
    });
}
//# sourceMappingURL=rarible.js.map