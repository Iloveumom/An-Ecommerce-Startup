const express=require("express");
const productContoller=require("../controllers/productConroller");
const router=express.Router();
router.get("/",productContoller.getProducts);
router.get("/:productID",productContoller.getProductById);
router.post("/",productContoller.addProducts);
// router.put("/:productID",productContoller.editProductById);
// router.delete("/:productID",productContoller.deleteProductById);
module.exports=router;