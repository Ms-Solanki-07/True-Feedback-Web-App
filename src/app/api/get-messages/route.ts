import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { dbConnect } from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { User } from "next-auth";
import mongoose from "mongoose";


export async function GET(request: Request) {
    await dbConnect()

    const session = await getServerSession(authOptions)
    const user: User = session?.user as User

    if (!session || !session.user) {
        return Response.json({
            success: false,
            message: "NOT Authenticated"
        }, { status: 401 })
    }

    const userId = new mongoose.Types.ObjectId(user._id)

    try {
        const userData = await UserModel.findById(user._id).select("messages").lean();

        if (!userData) {
            return Response.json({
                success: false,
                message: "User not found"
            }, { status: 404 })
        }

        const sortedMessages = [...userData.messages].sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

        return Response.json({
            success: true,
            messages: sortedMessages
        }, { status: 200 })

    } catch (error) {
        console.error("Something went wrong while getting messages", error)
        return Response.json({
            success: false,
            message: "Something went wrong while getting messages"
        }, { status: 500 })
    }
}