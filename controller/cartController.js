const carts = require("../model/cartModel")

exports.addTocartControlller = async(req,res)=>{
    const {id,title,description,price,category,image,rating} = req.body

    const userId = req.payload

    try {

        const existingProduct = await carts.findOne({id,userId})

            if(existingProduct){

                res.status(406).json('product already in your cart')

            }

            else{
                const newProduct = new carts({
                    id,title,price,description,category,image,rating, 
                    quantity:1,
                    grandTotal:price,userId
                })

                await newProduct.save()
                res.status(200).json(newProduct)
            }
        
        
    } catch (error) {
        res.status(401).json(error)
    }
}


exports.allCartItemController = async(req,res)=>{
    const userId = req.payload

    try {

        const allProduct = await carts.find({userId})
        res.status(200).json(allProduct)
        
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.removeItemFromCart=async(req,res)=>{
    const {id}=req.params
    try {
        await carts.findOneAndDelete({_id:id})
        res.status(200).json('deleted successfully')
        
    } catch (error) {
        res.status(401).json(error)
    }
}



exports.emptyCartController = async(req,res) =>{

    userId = req.payload

    try {


        await carts.deleteMany({userId})
        res.status(200).json('deleted')
        
    } catch (error) {
        res.status(406).json(error)
    }
}