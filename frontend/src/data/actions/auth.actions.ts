import { z } from "zod";

export async function useRegisterAction(prevState: any, formData: FormData) {

    const registerSchema = z.object({
        username: z.string().min(3, "Username must be at least 3 characters long").max(20, "Username must be at most 20 characters long"),
        email: z.string().email("Invalid email address"),
        password: z.string().min(6, "Password must be at least 6 characters long"),
    })

    const fields = {
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
    }

    const validationResults = registerSchema.safeParse(fields);

    const zodErrors = validationResults.error?.flatten().fieldErrors;

    if (!validationResults.success) {
        return {
            ...prevState,
            zodErrors
        }
    }

    return {
        ...prevState,
        zodErrors: [],
        data: fields,
        message: "created successfully",
    }
}