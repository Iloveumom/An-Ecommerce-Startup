const {sendErrorResponse,sendResponse}=require('../utility/response');
const getAllUsers=(req,res)=>{
    res.send("Fetch All users!!");
};
const getUserById=(req,res)=>{
        try
        {
                let user=req.params.userID;
                if(user>10)
                {
                    let err=new Error("User not found");
                    err.statusCode=400;
                    throw err;
                    //return  res.status(400).json({"value":"User note Found"});
                }
                return sendResponse(res,user,200);

        }   
        catch(err)
        {
               return  sendErrorResponse(res,err); 
        } 
};
const addUser=(req,res)=>{
    try
    {
              let {name,email}=req.body;
              if(!name || !email)
              {
                       let err=new Error("Name or Email requ!!!!");
                       err.statusCode=400;
                       throw err;         
              }
                //simulate creattion
                const user={id:1,name,email};
                return sendResponse(res,user,201);
    }
    catch(error)
    {
             return sendErrorResponse(res,error);
    }
  
};
module.exports={
    getAllUsers,
    getUserById,
    addUser
};