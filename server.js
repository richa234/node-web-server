const express = require('express');
const hbs=require('hbs');
const port = process.env.PORT || 3000;
var app =  express();

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});
hbs.registerHelper('screamIt',(text)=>{
    return text.toUpperCase();
});

app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));
app.use((req,res,next)=>{
 var now=new Date().toString();
 console.log(`${now}:`);
 next();
});
app.get('/',(req,res)=>{
//res.send('<h1>Hello Express!</h1>');
/*res.send({
    name:'Richa',
    likes:[
        'Food',
        'social'
    ],
    age: 25
});*/
res.render('home.hbs',{
   name:'Welcome To My Website',
   likes:['bike',
   'travel',
   'food'] ,
   pageTitle:'Home Page',
});
});
app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle:'About Page',
    });
});


app.get('/bad',(req,res)=>{
res.send({
    errMessage:'Unable to handle request'
});
});

app.listen(port,()=>{
    console.log(`Server is up on the port ${port}`);
});
