import {z} from "zod"

export const loginSchema = z.object({
    identifier: z.string(), // identifier is email
    password:  z.string()
})