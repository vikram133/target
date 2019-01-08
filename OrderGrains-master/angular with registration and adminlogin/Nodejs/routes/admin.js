const body = require('body-parser')
const db = require('../models/db');
const JWT = require('jsonwebtoken');
const nodemailer = require('nodemailer')

const SECRET = 'abc';














exports.validation=function(request,response){
    console.log('validation started');
    console.log(request.body);
    name = request.body.username;
    password = request.body.password;

    const payload = {
        name : name
    }

    request.getConnection(function(err,connection){
        var query=connection.query(db.admin_validate,[name,password],function(err,rows){
            if(err)throw err;
            if(rows.length !=0){
                nodemailer.createTestAccount((err,account)=>{

                    let tranporter = nodemailer.createTransport({
                        host : 'smtp.ethernal.email',
                        port : 465,
                        secure : true,
                        auth :{
                            user :account.user,
                            pass : account.pass
                        }
                    });
                
                    let mailOption={
                        from :'<ouroffice143@gmail.com>',
                        to : 'ouroffice@143@gmail.com',
                        subject :"hello",
                        text :'first one',
                    };
                    tranporter.sendMail(mailOption,(error,info)=>{
                        if(error){
                            console.log("error pa"+error);
                        }
                        console.log("mail Send Successfully: %s",nodemailer.getTestMessageUrl(info));
                    })
                })
                                
                const token=JWT.sign(payload,SECRET);
                response.end(JSON.stringify(token));
            }
            else{
                response.end(JSON.stringify(rows));
            }
        })
    })
    
}