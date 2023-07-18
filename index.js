const express =  require('express');
var bodyParser = require('body-parser')


const app = express();
app.use(bodyParser.json());

app.post('/fetch_contact',(req,res) => {
    console.log(req.body);
    if(req.body.phone !== '9876543210'){
        res.json({
            data : "",
            message : "Failure",
            code: 404,
        });
    }else {
        res.json({
            data : "Mohammed Imthiyas",
            message : "Success",
            code: 200,
        });
    }  
});



app.put('/getcontact/:id', function(req,res){
    console.log(req.params.id);
    const phonenumber = req.params.id;
    if(phonenumber == '9876543210'){
     res.json({
         message : "Updated",
         code: 200,
     });
    }else {
     res.json({
         message : "Not Found",
         code: 404,
     });
    }
 });

 
 

app.get('/getcontact', function(req,res){
res.json({
    message : "Message",
    code: 200,
});
});


app.listen(1000, (err,res) => {
     if(err){
        console.log('error in connection');
     }
     console.log('Port 1000 is connected');
});





