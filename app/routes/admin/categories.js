import Route from '@ember/routing/route';


export default Route.extend({
    model() {
      return this.store.findAll('category');          
    },

    actions: {
        addNewCategory(newCategory) {
            newCategory.save().then(
              category => {
                console.info('Response:', category);
                this.controller.set('newCategory', this.store.createRecord('category'));
              },
              error => {
                console.error('Error from server:', error);
              });
        },

        deleteCategory(category) {
            category.destoryRecord();
        },

        setupController(controller, model) {
            this._super(controller, model);
        
            controller.set('newCategory', this.store.createRecord('category'));
        },
        
        editCategory(category) {
            category.set('isEditing', true);
        },

        updateCategory(category) {
            category.save().then(
                category => category.set('isEditing', false)
            )
        }
    }
});
