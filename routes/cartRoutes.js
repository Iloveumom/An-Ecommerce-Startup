const express=require("express");
const router=express.Router();

router.get("/:userID",(req,res)=>{
    res.send(" Fetch the cart items for a specific user.");
});
router.post("/:userID",(req,res)=>{
    res.send("Add a product to the user's cart.");
});
module.exports=router;