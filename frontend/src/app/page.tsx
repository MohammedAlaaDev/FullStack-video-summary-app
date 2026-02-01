import axios from "axios";
import qs from "qs";
import { HeroSection } from "@/components/custom/hero-section";

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
        }
      }
    }
  }
})

async function getStrapiData(path: string) {
  const baseUrl = "http://localhost:1337";
  const url = new URL(path, baseUrl);

  url.search = homePageQuery;

  try {
    const res = await axios.get(url.href);
    const data = await res.data.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}

export default async function Home() {


  const data = await getStrapiData(`/api/home-page`);
  const { title, description, blocks } = data;
  console.log(blocks[0]);
  return (
    <main >
      <HeroSection data={blocks[0]} />
    </main>
  );
}
