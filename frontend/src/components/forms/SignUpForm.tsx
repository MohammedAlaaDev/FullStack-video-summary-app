"use client";
import Link from "next/link";

import {
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    CardFooter,
    Card,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import { useRegisterAction } from "@/data/actions/auth.actions";
import { ZodErrors } from "@/components/custom/ZodErrors";

const styles = {
    container: "w-full max-w-md",
    header: "space-y-1",
    title: "text-3xl font-bold text-pink-500",
    content: "space-y-4",
    fieldGroup: "space-y-2",
    footer: "flex flex-col",
    button: "w-full",
    prompt: "mt-4 text-center text-sm",
    link: "ml-2 text-pink-500",
};

export function SignupForm() {

    const initialState = {
        data: null,
        message: null,
        zodErrors: null,
    }

    const [formState, formAction] = useActionState(useRegisterAction, initialState);

    console.log(formState);

    return (
        <div className={styles.container}>
            <form action={formAction}>
                <Card>
                    <CardHeader className={styles.header}>
                        <CardTitle className={styles.title}>Sign Up</CardTitle>
                        <CardDescription>
                            Enter your details to create a new account
                        </CardDescription>
                    </CardHeader>
                    <CardContent className={styles.content}>
                        <div className={styles.fieldGroup}>
                            <Label htmlFor="username">Username</Label>
                            <Input
                                id="username"
                                name="username"
                                type="text"
                                placeholder="username"
                            />
                            <ZodErrors error={formState?.zodErrors?.username} />
                        </div>
                        <div className={styles.fieldGroup}>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="name@example.com"
                            />
                            <ZodErrors error={formState?.zodErrors?.email} />
                        </div>
                        <div className={styles.fieldGroup}>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="password"
                            />
                            <ZodErrors error={formState?.zodErrors?.password} />
                        </div>
                    </CardContent>
                    <CardFooter className={styles.footer}>
                        <Button type="submit" className={styles.button}>Sign Up</Button>
                    </CardFooter>
                </Card>
                <div className={styles.prompt}>
                    Have an account?
                    <Link className={styles.link} href="login">
                        Sign In
                    </Link>
                </div>
            </form>
        </div>
    );
}