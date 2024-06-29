const { orderSchema } = require("../models");

let addorder = (body) => {
    return orderSchema.create(body);
}

let getorder = () => {
    return orderSchema.find().populate([
        { path: 'bookName' },
        { path: 'userName' }
    ]);
}

module.exports = { addorder, getorder };
