const express=require('express');
const axios=require('axios');
const app=express();


app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/contact',(req,res)=>{
    res.send('contact us')})

app.get('/about',(req,res)=>{
    res.send('about us')
})

app.get('/posts',(req,res)=>{
    
    axios.get('http://localhost:3000/posts')
    .then(function(resp){
        res.json(resp.data)
    })
    .catch(function(error){console.error(error)})
})

app.listen(8080,()=>{
    console.log('Listening at port 8080')
})