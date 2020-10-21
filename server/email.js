const nodemailer = require('nodemailer')

const mailer = (email)=>{
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "punitthakur1919@gmail.com",
        pass: "8109095155",
      },
    });

    const mailOptions = {
      from: "punitthakur1919@gmail.com",
      to: "punitthakur1993@gmail.com",
      subject: "testing",
      text: "mission successful",
    };

    transporter.sendMail(mailOptions, (err, res) => {
      if (err) {
        console.log("appp......");
        console.log(err);
      } else {
        console.log("successful....");
      }
    });
}
module.exports= mailer