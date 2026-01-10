const sendErrorResponse=(res,err)=>{
        let message=err.message;
        let statusCode=err.statusCode;
        return res.status(statusCode)   .json({
            message:message,
            status:false
        });
};
const sendResponse=(res,data,statusCode)=>{
    
        return res.status(statusCode).json({
            data:data,
            status:true
        });
};
module.exports={
    sendErrorResponse,
    sendResponse
}