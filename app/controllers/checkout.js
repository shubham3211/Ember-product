import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        removeItem(pro) {
            this.shoppingCart.remove(pro);
        },

        clear(pro) {
            this.shoppingCart.reset(pro);
        },

        order() {
            this.shoppingCart.reset();
        }
    }
});
