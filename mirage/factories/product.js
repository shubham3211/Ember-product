import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    name: faker.commerce.productName,
    sku: faker.random.uuid(),
    unitPrice: faker.commerce.price,
});
