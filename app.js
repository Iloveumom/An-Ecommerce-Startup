const express=require("express");
const userRouter=require("./routes/userRoutes");
const productRouter=require("./routes/productRoutes");
const cartRouter=require("./routes/cartRoutes");
const app=express();
const port=9000;
app.use(express.static("public"));
app.use(express.json());
app.use("/users",userRouter);
app.use("/products",productRouter);
app.use("/cart",cartRouter);

app.listen(port,()=>{
        console.log("server runinng!!!");
});