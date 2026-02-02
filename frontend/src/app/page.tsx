import axios from "axios";
import qs from "qs";
import { HeroSection } from "@/components/custom/HeroSection";
import { getStrapiURL } from "@/lib/utils";
import { FeaturesSection } from "@/components/custom/FeaturesSection";
import { getHomeData } from "@/data/loaders";



function RenderBlocks(blocks: any) {
  return blocks.map((block: any) => {
    switch (block.__component) {
      case "layout.hero-section":
        return <HeroSection key={block.id} data={block} />;
      case "layout.features-section":
        return <FeaturesSection key={block.id} data={block} />;
    }
  });
}

export default async function Home() {

  const data = await getHomeData();
  console.log(data);
  const { blocks } = data;
  console.log(blocks[0]);
  console.log(blocks[1]);

  if (!blocks) return <div>Not Found</div>;

  return (
    <main >
      {RenderBlocks(blocks)}
    </main>
  );
}
