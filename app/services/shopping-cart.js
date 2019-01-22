import Service from '@ember/service';

export default Service.extend({
    items: null,

    init() {
        this._super(...arguments);
        this.items = [];
    },

    add(pro) {
        this.items.pushObject(pro);
    },

    remove(pro){
        this.items.removeObject(pro);
    },

    empty(){
        this.items.clear();
    },

    reset(){
        this.items = [];
    }
});
