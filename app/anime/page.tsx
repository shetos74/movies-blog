import MainDisplay from "../components/MainDisplay";


export default async function AllAnime() {
    const response = await fetch("http://localhost:3000/api/movies");
    const data = await response.json();
    console.log(data, "data");
  return (
    <div>
      <MainDisplay list={data} />
    </div>
  );
}
