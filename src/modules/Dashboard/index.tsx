import { Text } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { auth } from "../../config/firebase-config";
import FeedCard from "../Feed/components/FeedCard";
import { PostDTO } from "../Feed/types";

interface DashboardProps {
  userId: string;
}
interface DashboardDTO {
  party: PostDTO[];
  pendingParty: PostDTO[];
}

export default function Dashboard(props: DashboardProps) {
  const { userId } = props;
  const [userLogin, setUserLogin] = useState(false);
  const [data, setData] = useState<PostDTO[]>([]);
  auth.onAuthStateChanged((user: any) => {
    if (user && !userLogin) {
      setUserLogin(true);
    }
  });
  const loadData = async () => {
    if (userLogin && userId != "undefined") {
      const res = await axios.get(
        `https://hateelao-api.up.railway.app/dashboard/${userId}`
      );
      setData(res.data.party);
    }
  };
  useEffect(() => {
    loadData();
  }, [userLogin]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "auto",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Text
        style={{
          display: "flex",
          width: "180px",
          height: "34px",
          fontFamily: "Dosis",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "27px",
          lineHeight: "34px",
          letterSpacing: "0.155em",
          color: "white",
        }}
      >
        Dashboard
      </Text>
      {data.map((singlePost) => (
        <FeedCard key={singlePost.postId} post={singlePost} isLobby></FeedCard>
      ))}
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "rgba(255, 255, 255, 0.1)",
          color: "white",
          //fontSize: "20px",
        }}
      >
        <div style={{ display: userLogin ? "none" : "flex" }}>
          <Link href="/auth" style={{ color: "white" }}>
            Please Login
          </Link>
        </div>
      </div>
    </div>
  );
}
