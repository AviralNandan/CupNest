import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nandanaviral@gmail.com',
        pass: 'upom ldgv qwro jvzs',
    },
});

export const sendGmail = async (to: string, subject: string, html: string) => {
    const mailOptions = {
        from: 'CupNest',
        to,
        subject,
        html,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return true
    } catch (error) {
        console.error('Error sending email: %s', error);
        return false
    }
};