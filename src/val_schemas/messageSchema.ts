import { z } from "zod"

export const message = z.object({
    content: z.string().min(10, "atleast 10 characters required")
    .max(300, "no more than 100 characters")
}) 