import Commerce from '@chec/commerce.js';
const keys = require("../../server/config/keys");

const productsArray = [];

const commerce = new Commerce(keys.commerceJsKey);

commerce.products.list().then((product) => console.log(product));