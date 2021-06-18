const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.port || 8000;


const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get('/bmicalculator',(req,res) =>{
res.sendFile(__dirname+"/index.html");
});

app.post('/bmicalculator',(req,res) =>{
    let height = req.body.num1;
    let weight = req.body.num1;
        const BMI = Math.round(weight/height*height);
        let result="";
        if(BMI<=18.5){
            result = `Underweight ${BMI}`;
        }
        else if(BMI >18.5 && BMI <=25.0){
            result=`Normal  ${BMI}`;
        }
        else if(BMI >25.0 && BMI <=30){
            result=`Overweight  ${BMI}`;
        }
        else if(BMI >30){
            result=`Obese  ${BMI}`;
        }
    res.send(result);
    });
  

app.listen(port,()=>{
    console.log("listieng ",`${port}`);
});