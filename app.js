const express= require('express')
const app=express();
app.listen(3000)
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('test')
})