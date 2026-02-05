type Tlink = {
    id: number;
    url: string;
    label: string;
    isExternal: boolean;
}

type Media = {
    id: number;
    url: string;
    label: string;
    isExternal: boolean;
}

type TSocialMedia = Media[]
export type THeader = {
    id: number;
    login: Tlink;
    logoLink: Tlink;
}

export type TFooter = {
    id: number;
    footerText: string;
    socialMedia: TSocialMedia;
    logoLink: Tlink;
}

export type TRegisterUser = {
    username: string;
    email: string;
    password: string;
}

export type TLoginUser = {
    identifier: string;
    password: string;
}

export type TAuthUser = {
    id: number;
    documentId: string;
    username: string;
    email: string;
    firstName?: string;
    lastName?: string;
    bio?: string;
    image?: any;
    credits?: number;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export type TAuthResponse = {
    jwt: string;
    user: TAuthUser;
}

export type TStrapiError = {
    error: {
        status: number;
        name: string;
        message: string;
    }
};