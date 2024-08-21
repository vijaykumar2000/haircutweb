import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";

// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post("/appointment", (req, res) => {
  debugger;
  const { name, gender, phone, services, date, time } = req.body;

  // Map services to their names
  const serviceNames = services.map((service) => service.name);

  // Create a transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "infosysofferletter@gmail.com", // Replace with your email
      pass: "ixks emjt tyei moxc", // Replace with your email password
    },
  });

  // Set up email data
  let mailOptions = {
    from: "infosysofferletter@gmail.com",
    to: "vijaykale2311@gmail.com", // Replace with the email where you want to receive the appointment details
    subject: "New Appointment Booking",
    text: `New Appointment Details:
    Name: ${name}
    Gender: ${gender}
    Phone: ${phone}
    Services: ${serviceNames.join(", ")}
    Date: ${date}
    Time: ${time}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    debugger;
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.post('/appointment', async (req, res) => {
//   const { name, gender, phone, services, date, time } = req.body;

//   try {
//     let transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'infosysofferletter@gmail.com', // Replace with your email
//         pass: 'ixks emjt tyei moxc', // Replace with your email password
//       },
//     });

//     let mailOptions = {
//       from: 'infosysofferletter@gmail.com',
//       to: 'r.nagargoje15@gmail.com',
//       subject: 'New Appointment Booking',
//       text: `New Appointment Details:
//       Name: ${name}
//       Gender: ${gender}
//       Phone: ${phone}
//       Services: ${Array.isArray(services) ? services.join(', ') : services}
//       Date: ${date}
//       Time: ${time}`,
//     };

//     let info = await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'Email sent successfully', info: info.response });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ error: error.toString() });
//   }
// });
