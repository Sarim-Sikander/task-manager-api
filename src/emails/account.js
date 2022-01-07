const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sarimsikander24@gmail.com',
        subject: 'Thanks for joining us',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email,name) => {
    sgMail.send({
        to:email,
        from: 'sarimsikander24@gmail.com',
        subject: 'Thanks for using our services',
        text: `Thankyou for using our app, ${name}. Let me know how you get along with the app.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}