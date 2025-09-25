import nodemailer, { Transporter, SendMailOptions, SentMessageInfo } from 'nodemailer';
import VerificationEmail from "../../emails/VerificationEmail"
import { ApiResponse } from "@/types/ApiResponse"
import { render } from "@react-email/render";


export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse> {
    // Configure Nodemailer
    const transporter: Transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const htmlContent = await render(
        VerificationEmail({ username, otp: verifyCode })
    );

    // Email options
    const mailOptions: SendMailOptions = {
        from: '"True FeedBack" <mssolanki9166@gmail.com>',
        to: email,
        subject: 'True Feedback | Verification Code',
        html: htmlContent
    };

    // Send the email
    try {
        const info: SentMessageInfo = await transporter.sendMail(mailOptions);
        return { success: true, message: info };
    } catch (error: any) {
        console.log(error)
        return { success: false, message: error.message };
    }
}