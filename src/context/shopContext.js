import React, { Component } from 'react';
import Client from 'shopify-buy';

const ShopContext = React.createContext();

const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API,
});

export class ShopProvider extends Component {
  state = {
    product: {},
    products: [],
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false,
  };

  // Get the checkout initially whenever we load the application
  componentDidMount() {
    // Whenever the browser is refreshed, the 'componentDidMount' function creates a new checkout every time, and we actually do not want this to happen,
    // because if that happens, then the whole cart will be cleared every time the customer refreshes their browser.
    // So, we'll use an if statement:
    if (localStorage.checkout_id) {
      this.fetchCheckout(localStorage.checkout_id);
    } else {
      // When component first renders (mounts), it will load everything that's inside of it first
      this.createCheckout();
    }
  }

  createCheckout = async () => {
    // Shopify creates a unique URL specifically for the particular checkout.
    // Shopify enables us to add products to this state,
    // where then Shopify basically holds that on their end of the database.
    // So, we can always pull in that checkout by its ID.
    // And this is a really good way to actually keep track of everything that the user has inside of their cart
    // (e.g., if a user adds a prodcut to their cart and then they decide to close the browser and come back at a later time -
    // we actually want that checkout to remain the way that it is,
    // so that the experience is seamless and the customer can come back and check out whenever they want to).

    // So, we will be storing this checkout ID in local storage.
    // And what the local storage does is hold it inside of the browser's memory - the local storage of the browser.
    // So by using the local storage, we are enabling the browser of the customer to save the checkout ID inside of it.
    // And also, by clearing the browser data, the cusomter will lose access to their checkout ID.
    // But that's not a bad thing because when a customer clears everything from their browser, they expect everything to be cleared, which is a good thing.
    // But as long as the customer comes back to the browser, or to the website they use as the local storage,
    // the checkout and the cart items will remain there.

    // Generate a checkout ID
    const checkout = await client.checkout.create();
    localStorage.setItem('checkout_id', checkout.id);
    this.setState({ checkout: checkout });
  };

  fetchCheckout = (checkoutId) => {
    client.checkout.fetch(checkoutId).then((checkout) => {
      this.setState({ checkout: checkout });
    });
  };

  addItemToCheckout = async () => {};

  removeLineItem = async (lineItemIdsToRemove) => {};

  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({ products: products });
  };

  // The name of the product that is compatible with links
  fetchProductWithHandle = async (handle) => {
    const product = await client.product.fetchByHandle(handle);
    this.setState({ product: product });
  };

  closeCart = () => {};

  openCart = () => {};

  closeMenu = () => {};

  openMenu = () => {};

  render() {
    // console.log(this.state.checkout);

    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductWithHandle: this.fetchProductWithHandle,
          closeCart: this.closeCart,
          openCart: this.openCart,
          closeMenu: this.closeMenu,
          openMenu: this.openMenu,
          addItemToCheckout: this.addItemToCheckout,
          removeLineItem: this.removeLineItem,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

// This is what actually consumes the context
const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;
