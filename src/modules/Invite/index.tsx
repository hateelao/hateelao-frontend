import { Button } from "@mantine/core";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "../../config/firebase-config";

interface InviteProps {
  postId: string;
}
export default function Invite(props: InviteProps) {
  const { postId } = props;
  const [firebaseId, setFirebaseId] = useState("");
  auth.onAuthStateChanged((user) => {
    if (user) setFirebaseId(user.uid);
  });
  useEffect(() => {
    if (postId != "undefined" && firebaseId != "") {
      handleNewMember();
    }
  }, [firebaseId, postId]);
  async function handleNewMember() {
    const res = await axios.patch(
      `https://hateelao-api.up.railway.app/posts/${postId}/users/add`,
      { users: [firebaseId] }
    );
    location.href = "/lobby/" + postId;
  }
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        color: "white",
        //fontSize: "20px",
      }}
    >
      <Link href="/auth">Please Login</Link>
    </div>
  );
}
