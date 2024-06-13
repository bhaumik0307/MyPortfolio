import express from "express"
const router = express.Router()
import cors from "cors"
import nodemailer from "nodemailer"

// server used to send emails
const PORT = 3000
const app = express()
app.use(cors())
app.use(express.json())
app.use("/", router)
app.listen(PORT, () => console.log(`listening on port ${PORT})`))

const contactEmail = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'willa32@ethereal.email',
        pass: '1WkUdj8gntQbzzKPys'
    }
})

contactEmail.verify((error) => {
    if(error) {
        console.log(error)
    }
    else{
        console.log("Ready to Send")
    }
})

router.post("/contact", (req, res) => {
    const name = req.body.firstName + req.body.lastName
    const email = req.body.email
    const message = req.body.message
    const phone = req.body.phone
    const mail = {
        from: name,
        to: "willa32@ethereal.email",
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>`,
    }
    contactEmail.sendMail(mail, (error) => {
        if(error){
            res.json(error)
        }
        else{
            console.log("mail sent")
            res.json({code: 200, status: "Message Sent"})
        }
    })
})