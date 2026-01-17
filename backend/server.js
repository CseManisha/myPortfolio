const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config({path: './.env' });

const app_password_gmail = process.env.app_password_gmail;
const app = express();
app.use(cors());
app.use(express.json());

app.get('/',function(req,res){
  console.log("ok")
  res.send('hii backend is running')
});

// for cv 
app.get('/api/cv',(req,res) =>{
  res.json({
    url:"https://drive.google.com/file/d/1fS-92Vb2CPU5tHZFY66sqG24cao9Wmvh/view?usp=drivesdk"
    
  });
});


// Contact form endpoint
app.post("/send", async (req, res) => {
  console.log("send  again mail is running")
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Transporter setup (example with Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: 'manishamani1176@gmail.com', // your email admin
        pass: app_password_gmail, // your app password
      },
    });

    // Email options
   const mailOptions = {
      from: 'manishamani1176@gmail.com',
      to: 'manishamani1176@gmail.com', // you receive the email
      subject: `New message from ${name}`,
      html: `
        <h3>Contact Form Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    };

    // 📩 Auto-reply to USER
    const replyOptions = {
      from: "manishamani1176@gmail.com",
      to: email, // send back to the user
      subject: "Thank you for contacting us!",
      html: `
        <h3>Hello ${name},</h3>
        <p>Thank you for connecting with us. 🙏</p>
        <p>We have received your message:</p>
        <blockquote>${message}</blockquote>
        <p>Our team will get back to you soon.</p>
        <br/>
        <p>Best regards,<br/>Manisha Thapa</p>
      `,
    };




    // Send mail
    await transporter.sendMail(mailOptions);// to admin
    await transporter.sendMail(replyOptions);//to user

    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
});

app.listen(3000, () => {
  console.log('server is running on port 3000');
});
