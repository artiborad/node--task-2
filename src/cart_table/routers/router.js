const express=require("express")
const router = express.Router()
const Products = require("../models/model") 
const mongoose =require("mongoose")
const Product= require("../../stock_table/routers/router")

router.get("/",async(req,res)=>{
    try{
        const data = await Products.find({})
        res.send(data)
    }catch(e){
        res.send(e)
    }
})


router.post("/",async(req,res)=>{
    const product= new Product({
        id:req.body.id,
        product_id:req.body.product_id,
        quantity:req.body.quantity
    })
    try{
        const data= await product.save()
        res.send(data)
    }catch{[
        res.send(e)
    ]}
})

router.patch("/:id",async(req,res)=>{
    const updates = Object.keys(req.body)
    
    try{
        const data = await Product.findById(req.params.id) 
        updates.forEach((update)=>{
            data[update]=req.body[update]
        })
        
        const final = await data.save()
        res.json(final)
    }catch(e){
        res.send(e)
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const data = await Product.findByIdAndDelete(req.params.id)
        res.send(data)
    }catch(e){
        res.send(e)
    }
})
module.exports = router;