import { dbConnect } from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { verifySchema } from "@/schemas/verifySchema";
import { z } from 'zod'

const verifyCodeQuerySchema = z.object({
    verifyCode: verifySchema
})

export async function POST(request: Request) {
    await dbConnect()

    try {
        const { username, code } = await request.json()

        //validate with zode
        const queryParams = {
            verifyCode: {code}
        }

        const result = verifyCodeQuerySchema.safeParse(queryParams)
        console.log("result: ", result)

        if (!result.success) {
            const verifyCodeErrors = result.error.format().verifyCode?.code?._errors || []

            return Response.json({
                success: false,
                message: verifyCodeErrors.length > 0 ? verifyCodeErrors.join(', ') : 'Verification code must be 6 digits'
            }, { status: 400 })
        }

        const decodedUsername = decodeURIComponent(username)

        const user = await UserModel.findOne({ username: decodedUsername })

        if (!user) {
            return Response.json({
                success: false,
                message: "User not found"
            }, { status: 400 })
        }

        const isCodeValid = user.verifyCode === code
        const isCodeNotExpired = new Date(user.verifyCodeExpiry) > new Date()

        if (isCodeValid && isCodeNotExpired) {
            user.isVerified = true
            await user.save()

            return Response.json({
                success: true,
                message: "Account Verified successfully"
            }, { status: 200 })
        } else if (!isCodeNotExpired){
            return Response.json({
                success: false,
                message: "Verification code has expired, please signup again to get a new code"
            }, { status: 400 })
        } else {
            return Response.json({
                success: false,
                message: "Incorrect Verification Code"
            }, { status: 400 })
        }

    } catch (error) {
        console.error("Error verify code", error)
        return Response.json({
            success: false,
            message: "Error verify code"
        }, { status: 500 })
    }
}