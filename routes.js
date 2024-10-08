//import express
const express = require ('express')

//import product controller

const productController = require('./controller/productController')

//import userController

const userController = require('./controller/userController')

//import jwt

const jwt = require('./jwtMiddleware')

//import wishlist controller

const wishlistController = require('./controller/wishlistController')


const cartController = require('./controller/cartController')

const router = new express.Router()

//path to get all products

router.get('/all-product',productController.allProductController)




//path to view a particular product

router.get('/view-product/:id',productController.getAProductController)

//path to register

router.post('/register',userController.registerController)

//path to login

router.post('/login',userController.loginController)

//path to add items to wishlist

router.post('/add-wishitem',jwt,wishlistController.addItemToWishlistController)


router.get('/all-wishitem',jwt,wishlistController.getItemFromWishlistController)


//path to remove an item from wishlist

router.delete('/delete-wishlistitem/:id',wishlistController.removeItemFromWishlist)



//


router.post('/add-cart',jwt,cartController.addTocartControlller)


//path to get all cart items

router.get('/all-cartItem',jwt,cartController.allCartItemController)



//path to remove an item from cart

router.delete('/delete-cart/:id',cartController.removeItemFromCart)



router.delete('/empty-cart',jwt,cartController.emptyCartController)

//path to increment

router.get('/increment-cart/:id',cartController.incrementController)

//path to decrement

router.get('/decrement-cart/:id',cartController.decrementController)









//export router

module.exports = router