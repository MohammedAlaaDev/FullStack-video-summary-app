import axios from "axios";

async function getStrapiData(path: string) {
  try {
    const res = await axios.get(`http://localhost:1337${path}`);
    const data = await res.data.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}

export default async function Home() {

  const data = await getStrapiData("/api/home-page");
  const { title, description } = data;

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
