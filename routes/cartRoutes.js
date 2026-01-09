const express=require("express");
const cartController=require("../controllers/cartController");
const router=express.Router();

router.get("/:userID",cartController.getCartForUser);
router.post("/:userID",cartController.addProductToCart);
module.exports=router;