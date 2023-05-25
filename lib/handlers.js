const express = require('express')
const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, '../.env')})
const router = express.Router()
const nodeMailer = require('nodemailer')

async function mainMail(name, email, subject, message) {
    const transporter = await nodeMailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });
    const mailOption = {
      from: email,
      to: process.env.GMAIL_USER,
      subject: subject,
      text: `You got a message from ${name} \n
        Message: ${message}`,
    };
    try {
      await transporter.sendMail(mailOption);
      console.log('here')
      return Promise.resolve("Message Sent Successfully!");
    } catch (error) {
        console.log('over')
      return Promise.reject(error);
    }
  }


// ROUTES
router.get("/", function(req, res, next){
    res.render('home')
})
router.get("/resume", function(req, res, next){
    res.render('resume')
})
router.post("/send", async function(req, res, next) {
    const { name, email, subject, message } = req.body;
    console.log('in', email)
    try {
        await mainMail(name, email, subject, message);
        
        res.send("Message Successfully Sent!");
    } catch (error) {
        console.log(error)
        res.send("Message Could not be Sent");
    }
})
router.get("404", function(req, res){
    res.render('404')
})
router.get("500", function(req, res){
    res.render('500')
})

module.exports = router