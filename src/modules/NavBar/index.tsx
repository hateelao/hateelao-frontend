import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { ActionIcon, Button } from "@mantine/core";
import { Image } from "@mantine/core";
import React from "react";

export default function NavBar() {
  const [expand, setExpand] = useState(true);
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
    </div>
  );
}
