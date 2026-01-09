const productServices=require('../services/productService');
const getProducts=(req,res)=>{
    const products=productServices.getAllProduct();
    res.send("Fetch All products!!!!!!!");   
};
const getProductById=(req,res)=>{
    const product=productServices.getProductById();
    res.send("Fetch a product by their ID!!!!");
};

const addProducts=(req,res)=>{
    productServices.addProducts(req);
    res.send("Add a new product!!!!");
};


module.exports={
    getProducts,
    getProductById,
    addProducts,
}

