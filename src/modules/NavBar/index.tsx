import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { ActionIcon, Button } from "@mantine/core";
import { Image } from "@mantine/core";
import React from "react";
import UserProfile from "./UserProfile";
import { auth } from "../../config/firebase-config";
import axios from "axios";

export interface userDTO {
  displayName: string;
  photoURL: string;
}

export default function NavBar() {
  const [expand, setExpand] = useState(true);
  const [user, setUser] = useState<userDTO>({
    displayName: "",
    photoURL: "",
  });
  auth.onAuthStateChanged((user2) => {
    // const uid = user2 ? user2.uid : "";
    if (user2) {
      const loadData = async () => {
        const uid = "635388d46b0b1c31c6bbd114";
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
  console.log(user);

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
      <ActionIcon>
        <AiOutlineMenu
          color="white"
          size={42}
          style={{
            display: expand ? "flex" : "none",
          }}
          onClick={() => setExpand(false)}
        />
        <AiOutlineClose
          color="white"
          size={42}
          style={{ display: !expand ? "flex" : "none" }}
          onClick={() => setExpand(true)}
        />
      </ActionIcon>
      <Button
        style={{
          display: !expand ? "flex" : "none",
          backgroundColor: "#5a5a84",
        }}
      >
        find party
      </Button>
      <Button
        style={{
          display: !expand ? "flex" : "none",
          backgroundColor: "#5a5a84",
        }}
      >
        ty lao
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
