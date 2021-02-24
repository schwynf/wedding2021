const express = require("express");
const router = express.Router();
const db = require("../models");
const nodemailer = require('nodemailer');

router.post("/email", async function (req, res, next) {
    try {
        console.log(req.body)
        await db.Email.create(req.body);
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "schwynf@gmail.com",
                pass: process.env.GMAIL,
            },
        });

        let info = await transporter.sendMail({
            from: `${req.body.email}`,
            to: "knkobur@gmail.com",
            subject: `Reservation`,
            text: `Reservation for ${req.body.name} and ${req.body.guest}`,
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        res.json("schwyn");

    } catch (error) {
        console.log(error)
    }
});

router.get("/email", async function (req, res, next) {
    let data = await db.Email.find({});
    res.json(data);
});

module.exports = router;