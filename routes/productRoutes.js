const express=require("express");
const router=express.Router();
router.get("/",(req,res)=>{
    res.send("Fetch All products!!");
});
router.get("/:productID",(req,res)=>{
    res.send("Fetch a product by their ID");
});
router.post("/",(req,res)=>{
    res.send("Add a new product.");
});
module.exports=router;