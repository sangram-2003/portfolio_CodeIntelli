import { Resend } from 'resend';

const resend = new Resend(`${process.env.RESEND_API_KEY}`);


const emailSender = async (data)=>{

    try {
        resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'sangramdeveloper1@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});
    } catch (error) {
        
    }
}