const getAllUsers=(req,res)=>{
    res.send("Fetch All users!!");
};
const getUserById=(req,res)=>{
    res.send("Fetch a user by their ID");
};
const addUser=(req,res)=>{
    res.send("Add a new user.");
};
module.exports={
    getAllUsers,
    getUserById,
    addUser
};