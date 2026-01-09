const onSubmitHandler=(e)=>{
    e.preventDefault();
    //console.log(e.target.productname.value);
    const productname=e.target.productname.value;
    let obj={
        productname
    };
    axios.post("http://localhost:9000/products",obj).then((res)=>{
        console.log("response",res.data.value.productname);
    }).catch((err)=>{
        console.log(err);
    });
};