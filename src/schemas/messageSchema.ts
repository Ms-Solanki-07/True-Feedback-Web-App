import { z } from "zod";

export const messageSchema = z.object({
    content: z
        .string()
        .min(4, {message: "content must be atleast of 4 character"})
        .max(300, {message: "content must be no longer than 300 character"})
})