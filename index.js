const express=require("express");
const path=require('path');
const app=express();
const PORT=process.env.PORT | 9000
app.get("/",(req,res)=>{
    res.send({message:"hello"});
})
app.get("/hello",(req,res)=>{
   res.send("hello")
})
// app.get("/htmlpage",(req,res)=>{
//     res.sendFile(path.join(__dirname,"public/index.html"));
// })
// app.get("/someaction",(req,res)=>{
//     console.log(req.query);
//     let data=req.query.uname;
//     console.log(data);
//     res.send(`username is ${data}`);
// })
app.get("/getDelete",(request,response)=>
{
    var obj=[{
        "name":"neethu","id":1
    },
{
    "name":"nava","id":2
}]
   response.send(obj);
});
app.listen(PORT,()=>{
    console.log("listening on 2000");
}) 