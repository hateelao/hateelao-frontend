import BlockPost from "../Lobby/BlockPost";
import FeedCard from "./components/FeedCard";
import NewPost from "./components/NewPost";
import axios from "axios";
import { useEffect, useState } from "react";
import { PostDTO } from "./types";
import { auth } from "../../config/firebase-config";

enum Status {
  ONWER,
  MEMBERED,
  INVITED,
}
export default function FeedPage() {
  const [data, setData] = useState<PostDTO[]>([]);
  const loadData = async () => {
    const res = await axios.get("https://hateelao-api.up.railway.app/explore");
    setData(res.data.posts);
  };
  useEffect(() => {
    loadData();
  }, []);
  // console.log(data);
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
        {data.map((post, inx) => {
          return <FeedCard key={inx} post={post} />;
        })}
      </div>
    </>
  );
}
