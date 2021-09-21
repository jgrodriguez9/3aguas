import Commerce from "@chec/commerce.js";
const keys = require("../config/keys");
const commerce = new Commerce(keys.commerceJsKey);

export default commerce