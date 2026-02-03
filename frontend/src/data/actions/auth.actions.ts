
export function signUpAction(prevState: any, formData: FormData) {
    const fields = {
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
    }
    return {
        ...prevState,
        fields,
        message: "User created successfully",
    }
}