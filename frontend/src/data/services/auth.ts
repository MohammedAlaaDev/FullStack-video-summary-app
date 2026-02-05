import { getStrapiURL } from "@/lib/utils";
import { TAuthResponse, TLoginUser, TRegisterUser, TStrapiError } from "@/types";
import axios from "axios";

type TAuthServiceResponse = TAuthResponse | TStrapiError;

export function isAuthError(res: TAuthServiceResponse): res is TStrapiError {
    return "error" in res;
}

export function isAuthSuccess(res: TAuthServiceResponse): res is TAuthResponse {
    return "jwt" in res;
}

const baseUrl = getStrapiURL();

export async function registerUser(userData: TRegisterUser): Promise<TAuthResponse | any> {

    const url = new URL("/api/auth/local/register", baseUrl);

    try {
        const res = await axios.post(url.href,
            userData,
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );
        console.log(res);
        return res.data;
    } catch (error: any) {
        if (error.response && error.response.data) {
            return error.response.data as TStrapiError;
        }
        return undefined;
    }
}

export async function loginUser(userData: TLoginUser) {
    const url = new URL("/api/auth/local", baseUrl);

    try {
        const res = await axios.post(url.href,
            userData,
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )
        return res.data;
    } catch (error) {
        console.log(error)
        return error;
    }
}