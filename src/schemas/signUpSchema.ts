import {z} from "zod"

export const usernameValidation = z
    .string()
    .min(3, "Username must be atleast 3 character")
    .max(20, "Username must be no more 20 character")
    .regex( /^[a-zA-Z0-9_.-]+$/, "Username must not contain special character")


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Not a valid email"}),
    password: z.string().min(6, {message: "Password must be atleast 6 character"}) 
})