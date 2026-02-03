import qs from "qs";
import { getStrapiURL } from "@/lib/utils";
import axios from "axios";

const baseUrl = getStrapiURL();

async function fetchData(url: string) {
    const authToken = null;
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`,
    }
    try {
        const res = await axios.get(url, {
            headers: authToken ? headers : undefined,
        })
        return res.data.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function getHomeData() {
    // throw new Error("Not Found");
    const url = new URL("/api/home-page", baseUrl);
    const homePageQuery = qs.stringify({
        populate: {
            blocks: {
                on: {
                    "layout.hero-section": {
                        populate: {
                            image: {
                                fields: ["url", "alternativeText"],
                            },
                            link: {
                                populate: true,
                            }
                        }
                    },
                    "layout.features-section": {
                        populate: {
                            feature: {
                                populate: true,
                            }
                        }
                    }
                }
            }
        }
    })

    url.search = homePageQuery;
    return await fetchData(url.href);
}

export async function getMainRootData() {
    const url = new URL("/api/main-root", baseUrl)
    url.search = qs.stringify({
        populate: [
            "Header.logoLink",
            "Header.login",
            "Footer.logoLink",
            "Footer.socialMedia",
        ],
    })
    try {
        const res = await fetchData(url.href);
        return res;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function getMetaData() {
    const url = new URL("/api/main-root", baseUrl);
    url.search = qs.stringify({
        fields: ["title", "description"],
    })
    try {
        const res = await fetchData(url.href);
        return res;
    } catch (err) {
        console.error(err);
        throw err;
    }
}