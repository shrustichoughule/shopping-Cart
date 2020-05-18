const express = require("express");
const router = express.Router();

const ctrlProduct = require("../controllers/product.controller");

router.patch("/addProduct/:userId", ctrlProduct.addProduct);
router.patch("/updateProduct/:userId/:productId", ctrlProduct.updateProduct);
router.get("/allProduct/:userId", ctrlProduct.allProduct);
router.delete("/deleteProduct/:userId/:productId", ctrlProduct.deleteProduct);
module.exports = router;
