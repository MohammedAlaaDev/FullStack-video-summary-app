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