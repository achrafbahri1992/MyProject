const express = require("express");
const { addProduct, allProduct,  getNike, getAdidas, getShoes, getTraining, getProduct } = require("../controller/product.controller");




router = express.Router();


router.post("/addproduct", addProduct)
router.get("/getProduct",allProduct)
router.get("/getnike",getNike)
router.get("/getadidas",getAdidas)
router.get("/shoes",getShoes)
router.get("/training",getTraining)
router.get("/get",getProduct)

module.exports = router