import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { ActionIcon, Burger, Button } from "@mantine/core";
import { Image } from "@mantine/core";
import React from "react";
import UserProfile from "./UserProfile";
import { auth } from "../../config/firebase-config";
import axios from "axios";
import Link from "next/link";

export interface userDTO {
  displayName: string;
  photoURL: string;
}

export default function NavBar() {
  const [expand, setExpand] = useState(false);
  const firebaseId = auth.currentUser?.uid;
  const [user, setUser] = useState<userDTO>({
    displayName: "",
    photoURL: "",
  });
  auth.onAuthStateChanged((user2: any) => {
    // const uid = user2 ? user2.uid : "";
    if (user2) {
      const loadData = async () => {
        const uid = user2.uid;
        const res = await axios.get(
          `https://hateelao-api.up.railway.app/users/${uid}`
        );
        setUser(res.data);
      };
      if (user.displayName == "") {
        loadData();
      }
    }
  });
  // console.log(user);

  return (
    <div
      style={{
        width: "100%",
        height: "55px",
        zIndex: "3",
        display: "flex",
        backgroundColor: "#5a5a84",
        alignItems: "center",
        boxShadow: "0px 3px 5px 3px rgb(0 0 0 / 20%)",
        paddingLeft: "25px",
        gap: "25px",
        position: "fixed",
      }}
    >
      <Burger
        opened={expand}
        color="white"
        onClick={() => setExpand((o) => !o)}
      />

      <Button
        style={{
          display: expand ? "flex" : "none",
          backgroundColor: "#5a5a84",
        }}
      >
        <Link href="/">Explore</Link>
      </Button>
      <Button
        onClick={() => (location.href = `/dashboard/${firebaseId}`)}
        style={{
          display: expand ? "flex" : "none",
          backgroundColor: "#5a5a84",
        }}
      >
        Dashboard
      </Button>
      <div
        style={{
          width: "42px",
          height: "42px",
          display: "flex",
          position: "absolute",
          left: "50%",
          top: "6px",
          transform: "translate(-50%,0%)",
          justifyContent: "center",
        }}
      >
        <Image width={42} height={42} src="/hateelaoLogo.png" alt="Logo" />
      </div>
      <UserProfile user={user} />
    </div>
  );
}
