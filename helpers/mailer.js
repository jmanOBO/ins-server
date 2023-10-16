const nodemailer=require("nodemailer");

const sendmail=(message)=>{

    const transporter=nodemailer.createTransport({
        host: process.env.HOST,
        port: 465,
        secure: true,
        debug: true,
        auth:{
          user: process.env.HOST_EMAIL,
          pass: process.env.HOST_PASSWORD
      
        }
      });
      
      const mailoptions={
          from:process.env.HOST_EMAIL,
          to: process.env.EMAIL,
          subject: "New Message",
          text: message
      
      }
      transporter.sendMail(mailoptions, (error,_)=>{
        if(error){
         console.log(error);
        }else{
          console.log("Email sent ");
        }
      })

}
module.exports=sendmail;