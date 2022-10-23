import BlockPost from "./components/BlockPost";
import FeedCard from "./components/FeedCard";
import NewPost from "./components/NewPost";
import axios from "axios";
import { useEffect, useState } from "react";

enum Status {
  ONWER,
  MEMBERED,
  INVITED,
}
interface User {
  userID: string;
  displayName: string;
  photoURL: string;
  firebaseID: string;
}
interface PostDTO {
  postId: string;
  title: string;
  partySize: number;
  users: [
    {
      status: Status;
      user: {
        userId: string;
        displayName: string;
        photoURL: string;
        firebaseId: string;
      };
    }
  ];
}
export default function FeedPage() {
  const [data, setData] = useState<PostDTO[]>([]);
  const loadData = async () => {
    const res = await axios.get("https://hateelao-api.up.railway.app/explore");
    // const res2 = await axios.post("https://hateelao-api.up.railway.app/posts", {
    //   title: "test",
    //   partySize: 5,
    // });
    setData(res.data.posts);
  };
  useEffect(() => {
    loadData();
  }, []);
  // const datas = [
  //   { title: "Valorant", partySize: 5 },
  //   { title: "Apex Legends", partySize: 4 },
  //   { title: "Hai di lao", partySize: 4 },
  //   { title: "Dating", partySize: 2 },
  //   { title: "Trip Chula", partySize: 10 },
  // ];
  // const postdatas = [
  //   {
  //     user: "Peter Parker",
  //     desc: "Hello, I'm Spiderman",
  //     src: "https://practicaltyping.com/wp-content/uploads/2021/03/spidermanmcu.jpg",
  //   },
  //   {
  //     user: "Steve Rogers",
  //     desc: "I'm Captain America",
  //     src: "https://media.gq.com/photos/56a15e4ed312acff191b8bf2/16:9/w_2560%2Cc_limit/chris-evans-captain-america.jpg",
  //   },
  //   {
  //     user: "Adam",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ",
  //     src: "https://m.media-amazon.com/images/M/MV5BZTU5YjYxMGEtM2ViZi00OTlkLTllYzctNzE3MDY3ODQ3MTg2XkEyXkFqcGdeQXVyMjM3NTU0NTQ@._V1_FMjpg_UX1000_.jpg",
  //   },
  // ];
  console.log(data);
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
        {data.map((datai, inx) => {
          return (
            <FeedCard
              key={inx}
              title={datai.title}
              partySize={datai.partySize}
            />
          );
        })}
      </div>
    </>
  );
}
