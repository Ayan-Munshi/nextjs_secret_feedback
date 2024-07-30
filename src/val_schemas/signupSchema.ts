// this schema is only for validation, (zod is schema validation library)
import {z} from 'zod'

export const usernameVal = z.string().min(2, "username must contain atleast 2 characters")
.max(20, "username must not contain more than 20 characters")
.regex(/^[a-zA-Z0-9_]{3,20}$/ , "username must not contain special characters")

export const signupSchema = z.object({
    username: usernameVal,
    email: z.string().email({message:'invalid email address'}), // email validation
    password: z.string().min(6,{ message: "password contain atleast 6 character"}) // password validation
})