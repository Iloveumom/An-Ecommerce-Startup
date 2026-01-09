const getProducts=(req,res)=>{
    res.send("Fetch All products!!!!");   
};
const getProductById=(req,res)=>{
    res.send("Fetch a product by their ID!!");
};
const editProductById=(req,res)=>{
    res.send("update a product by their id.");
};
const addProducts=(req,res)=>{
    res.send("Add a new product!!");
};

const deleteProductById=(req,res)=>{
    res.send("Delete a new product by there id.");
};
module.exports={
    getProducts,
    getProductById,
    editProductById,
    addProducts,
    deleteProductById
}

