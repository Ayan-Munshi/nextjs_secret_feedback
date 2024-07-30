import {z} from "zod"

export const acceptingSchema = z.object({
    acceptingMessages : z.boolean()
})