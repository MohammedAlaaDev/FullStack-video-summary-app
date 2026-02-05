"use server"

import { z } from "zod";
import { registerUser } from "@/data/services/auth";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function useRegisterAction(prevState: any, formData: FormData) {

    const config = {
        maxAge: 60 * 60 * 24 * 7,
        httpOnly: true,
        secure: true,
        path: "/",
    }


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

    const resData = await registerUser(validationResults.data);

    if (!resData) {
        return {
            ...prevState,
            strapiErrors: null,
            zodErrors: null,
            message: "wrong!",
        }
    }

    if (resData.error) {
        return {
            ...prevState,
            strapiErrors: resData.error,
            zodErrors: null,
            message: "failed to register !",
        }
    }

    const cookieStore = await cookies();
    cookieStore.set("jwt", resData.jwt, config);

    redirect("/dashboard");

}
