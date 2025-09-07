import { resend } from "@/lib/resendMail"
import VerificationEmail from "../../emails/VerificationEmail"
import { ApiResponse } from "@/types/ApiResponse"

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'True Feedback | Verification Code',
            react: VerificationEmail({username, otp: verifyCode}),
        });

        return { success: true, message: "verification email sent succesfully" }

    } catch (emailError) {
        console.error("Email sending verification error: ", emailError)
        return { success: false, message: "Failed to send verification mail" }
    }
}