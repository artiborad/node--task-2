
const mongoose=require("mongoose")

const stockSchema = mongoose.Schema({
    product_id:{
        type:Number,
        require:true
    },
    product_name:{
        type:String,
        require:true
    },
    count:{
        type:Number,
        required:true
    }
})




const stock_table = mongoose.model("stock_table",stockSchema)
module.exports= new mongoose.model("stock_table",stockSchema)
