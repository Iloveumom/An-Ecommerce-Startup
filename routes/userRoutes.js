const express=require("express");
const router=express.Router();
router.get("/",(req,res)=>{
    res.send("Fetch All users!!");
});
router.get("/:userID",(req,res)=>{
    res.send("Fetch a user by their ID");
});
router.post("/",(req,res)=>{
    res.send("Add a new user.");
});
module.exports=router;