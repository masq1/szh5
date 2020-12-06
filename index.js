const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send('asdasdasdasd')
    
})
app.listen(3000,()=>{
    console.log("用户启动了")
})