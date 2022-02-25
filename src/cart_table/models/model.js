const mongoose = require('mongoose')
const cartSchema = mongoose.Schema({
    product_id: {
        type: Number,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    quantity:{
            type:Number,
            require:true
        }
});


const cart_table = mongoose.model('cart_table', cartSchema)
module.exports = new mongoose.model("cart_table", cartSchema)