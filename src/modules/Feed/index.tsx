import BlockPost from "./components/BlockPost";
import FeedCard from "./components/FeedCard";
import NewPost from "./components/NewPost";

export default function FeedPage() {
  const datas = [
    { title: "Valorant", partySize: 5 },
    { title: "Apex Legends", partySize: 4 },
    { title: "Hai di lao", partySize: 4 },
    { title: "Dating", partySize: 2 },
    { title: "Trip Chula", partySize: 10 },
  ];
  const postdatas = [
    {
      user: "Peter Parker",
      desc: "Hello, I'm Spiderman",
      src: "https://practicaltyping.com/wp-content/uploads/2021/03/spidermanmcu.jpg",
    },
    {
      user: "Steve Rogers",
      desc: "I'm Captain America",
      src: "https://media.gq.com/photos/56a15e4ed312acff191b8bf2/16:9/w_2560%2Cc_limit/chris-evans-captain-america.jpg",
    },
    {
      user: "Adam",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ",
      src: "https://m.media-amazon.com/images/M/MV5BZTU5YjYxMGEtM2ViZi00OTlkLTllYzctNzE3MDY3ODQ3MTg2XkEyXkFqcGdeQXVyMjM3NTU0NTQ@._V1_FMjpg_UX1000_.jpg",
    },
  ];
  console.log(datas);
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "20px",
          gap: "20px",
        }}
      >
        <NewPost></NewPost>
        {datas.map((data, inx) => {
          return (
            <FeedCard key={inx} title={data.title} partySize={data.partySize} />
          );
        })}
        {postdatas.map((data, inx) => {
          return (
            <BlockPost
              key={inx}
              title={data.user}
              desc={data.desc}
              source={data.src}
            />
          );
        })}
      </div>
    </>
  );
}
