import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('product');
    },

    actions: {
        addNewProduct(newProduct) {
            newProduct.save().then(
                product => {
                    console.info('Response:', product),
                    this.controller.set('newProduct', this.store.createRecord('product'))
                }                    
            )
        },

        deleteProduct(product) {
            product.dstroyrecord();
        },

        setupController(controller, model){
            this._super(controller, model);
            controller.set('newProduct', this.store.createRecord('product'))
        },

        editProduct(product) {
            product.set('isEditing', true);
        },

        cancelEditing(product) {
            product.set('isEditing', false);
        },

        updateProduct(product) {
            product.save().then(
                product => product.set('isEditing', false)
            )
        }
    }
});
