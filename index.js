const express=require('express');

const app=express();


app.get('/',(req,res)=>{
    res.send('hello world')
})
app.listen(8080,()=>{
    console.log('Listening at port 8080')
})