const nodeMailer = require('nodemailer')

const sendEmail = async options => {
    // const transport = nodemailer.createTransport({
    //     host: process.env.SMTP_HOST,
    //     port: process.env.SMTP_PORT,
    //     auth: {
    //         user: process.env.SMTP_EMAIL,
    //         pass: process.env.SMTP_PASS
    //     }
    // })
    // const message = {
    //     from: `${process.env.SMTP_FROM_EMAIL} <${process.env.SMTP_FROM_NAME}>`,
    //     to: options.email,
    //     subject: options.subject,
    //     text: options.message
    // }

    // await transport.sendMail(message)
    const transporter = nodeMailer.createTransport({
        host: process.env.SMPT_HOST,
        port: process.env.SMPT_PORT,
        service: process.env.SMPT_SERVICE,
        auth: {
          user: process.env.SMPT_MAIL,
          pass: process.env.SMPT_PASSWORD,
        },
      });
    
      const mailOptions = {
        from: process.env.SMPT_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,
      };
    
      await transporter.sendMail(mailOptions);
}

module.exports = sendEmail