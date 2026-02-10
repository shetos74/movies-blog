import MainDisplay from "../components/MainDisplay";

export default function AllAnime() {
  const anime = [
    {
      id: "1",
      title: "Jujustu Kaisen",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
      rating: 8.5,
    },
    {
      id: "2",
      title: "Naruto",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://cdn.myanimelist.net/images/anime/13/17405.jpg",
      rating: 9.0,
    },
    {
      id: "3",
      title: "Attack on Titan",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
      rating: 9.5,
    },
  ];
  return (
    <div>
      <MainDisplay list={anime} />
    </div>
  );
}
