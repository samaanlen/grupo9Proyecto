const express = require("express");

const app = express();

app.use( express.static("public") ) 

app.get ('/home', (req, res) => {
    res.sendFile(__dirname + "/views/home.html")
})

app.listen( 3000, () =>{ 
    console.log ("servidor corriendo en puerto 3000")
})

// app.get('/', (req,res)=>{
//    res.sendFile(__dirname + '/views/home.html');
//});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
 });
 
 app.get('/register', (req,res)=>{
   res.sendFile(__dirname + '/views/register.html');
 });