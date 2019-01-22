import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.findAll('product');
  },

  actions: {
    addToShoppingCart(product) {
      this.shoppingCart.add(product);
    }
  }

});