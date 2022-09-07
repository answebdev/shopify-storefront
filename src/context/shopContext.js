import React, { Component } from 'react';
import { Client } from 'shopify-buy';

// Initializing a client to return content in the store's primary language
// See Shopify docs: https://shopify.github.io/js-buy-sdk/
const client = Client.buildClient({
  domain: 'your-shop-name.myshopify.com',
  storefrontAccessToken: 'your-storefront-access-token',
});

export class ShopProvider extends Component {
  render() {
    return <div>shopContext</div>;
  }
}

export default ShopProvider;
