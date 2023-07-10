import type { NextApiRequest, NextApiResponse } from 'next'
require('dotenv').config()

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    let nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
        port: 587,
        host: "smtp.office365.com",
        auth: {
            user: process.env.user,
            pass: process.env.password,
        },
        secure: false,
    });
    const mailData = {
        from: process.env.user,
        to: ['fernando_hirae@hotmail.com', 'fernandohiraes@gmail.com'],
        subject: req.body.subject,
        text: req.body.message + " | Sent from: " + req.body.email + " | Message from: " + req.body.name,
        html: `
        <p>Name: ${req.body.name}</p>
        <p>Sent from: ${req.body.email}</p>
        <p>${req.body.subject}</p>
        <div>${req.body.message}</div>`
    }
    
    transporter.sendMail(mailData, function (err: any | null, info: any) {
        if(err){
            res.status(404).json({
            error: `Connection refused at ${err.address}`
            });
        }
        else {
          res.status(200).json({
            success: `Message delivered to ${info.accepted}`
          });
        }
    });

    res.status(200)
}