const mongoose = require('mongoose')
const cartModel = mongoose.Schema({
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    }],
    totalPrice: {
        type: Number,
        default: 0
    },
});

module.exports = mongoose.model('Cart', cartModel);