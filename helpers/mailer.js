const nodemailer=require("nodemailer");

const sendmail=(message)=>{

    const transporter=nodemailer.createTransport({
        host: "moverswayinternational.com",
        port: 465,
        secure: true,
        debug: true,
        auth:{
          user: "ins@moverswayinternational.com",
          pass: "Mantle123$"
      
        }
      });
      
      const mailoptions={
          from:"ins@moverswayinternational.com",
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