//add item

const wishes = require("../model/wishListModel")

exports.addItemToWishlistController = async(req,res) => {

    console.log('addfunction');
    

    const {id,title,description,price,category,image,rating} = req.body
    console.log(id,title,description,price,category,image,rating);
    

    const userId = req.payload
    console.log(userId);
    

    try {

        const existingProduct = await wishes.findOne({id,userId})
        console.log(existingProduct);
        

        if(existingProduct){
            res.status(406).json("product already there in the wishlist")
        }

        else{
            const newProduct = new wishes({
                id,title,price,description,category,image,rating,userId
            })

            await newProduct.save()
            res.status(200).json("product addedd successfully")
        }
        
    } catch (error) {
        console.log('inside catch');
        
        
res.status(401).json(error)

    }


}




//get item

exports.getItemFromWishlistController = async(req,res)=>{
    const userId = req.payload

    try {


        const allProduct = await wishes.find({userId})
        res.status(200).json(allProduct)
        
    } catch (error) {
        
res.status(401).json(error)

    }
}



// remove item

exports.removeItemFromWishlist=async(req,res)=>{
    const {id}=req.params
    try {
        await wishes.findOneAndDelete({_id:id})
        res.status(200).json('deleted successfully')
        
    } catch (error) {
        res.status(401).json(error)
    }
}





