import BlockPost from "./components/BlockPost";
import FeedCard from "./components/FeedCard";

export default function FeedPage() {
  const datas = [
    { title: "Valorant", desc: "5 people" },
    { title: "Apex Legends", desc: "4 people" },
    { title: "Hai di lao", desc: "4 people" },
    { title: "Dating", desc: "2 people" },
    { title: "Trip Chula", desc: "10 people" },
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
        {datas.map((data, inx) => {
          return <FeedCard key={inx} user={data.title} partySize={data.desc} />;
        })}
        {postdatas.map((data, inx) => {
          return (
            <BlockPost
              key={inx}
              user={data.user}
              status={data.desc}
              source={data.src}
            />
          );
        })}
      </div>
    </>
  );
}
