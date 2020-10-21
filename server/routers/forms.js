const { json } = require('body-parser')
const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

let msg
router.post('/',(req,res)=>{
    mailer(req.body)
     msg = "Mail has been sent to your Email"
})
router.get('/',(req,res)=>{
  res.send(msg);
})
const mailer = (body) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "",//put your email address
      pass: "",//put your password 
    },
  });

  const mailOptions = {
    from: "",////put your email address
    to: body.email,
    subject: "NotchUp Trial Class Booked successfully",
    text: `Dear ${body.pname} ${body.cname}'s class at ${body.time} hes been successfully booked `,
  };

  transporter.sendMail(mailOptions, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("successful....")
    }
  });
};

module.exports=router