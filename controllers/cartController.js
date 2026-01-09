const getCartForUser=(req,res)=>{
    res.send(" Fetch the cart items for a specific user.");
};
const addProductToCart=(req,res)=>{
    res.send("Add a product to the user's cart.");
};
module.exports={
    getCartForUser,
    addProductToCart
};