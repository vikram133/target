const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const body = require('body-parser');
const mysql = require('mysql');
const connection = require('express-myconnection');

const admin = require('./routes/admin');
//  const PORT =3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.set('port',process.env.PORT||5000);
app.set('views',path.join(__dirname,'view'));
app.use(body.json());


app.use(
    connection(mysql,{
        host : 'localhost',
        user : 'root',
        password : 'karthik@1991',
        port : 3306,
        database : 'grains'
    },'request')
);

app.post('/admin/login',admin.validation);


http.createServer(app).listen(app.get('port'),function(){
    console.log('Express server port no:-->'+app.get('port'));
})

