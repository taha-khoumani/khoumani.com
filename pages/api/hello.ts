import { NextApiRequest, NextApiResponse } from "next";
import Error from "next/error";

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    email:string,
    message:string,
  };
}

export default async function handler (req:ExtendedNextApiRequest,res:NextApiResponse){
  if(req.method !== 'POST'){
      res.status(405).json({status:405,message:'This is suposed to be a POST request.'})
      return null;
  }

  const {email,message} = req.body

  var nodemailer = require('nodemailer');

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'khoumanitaha25@gmail.com',
      pass: 'adlmobzinusmswnu'
    }
  });

  var mailOptions = {
    from: 'khoumanitaha25@gmail.com',
    to: 'khoumanitaha23@gmail.com',
    subject: `XXX PORTFOLIO-EMAIL:IMPORTANT: "${email}" sent you an email from your portfolio. XXX`,
    text: message
  };

  transporter.sendMail(mailOptions, function(error:Error, info:{response:string}){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
    


  res.status(200).json({status:200,message:'message sent succesefully'})
}