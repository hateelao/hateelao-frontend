import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { ActionIcon, Button } from "@mantine/core";

export default function NavBar() {
  const [expand, setExpand] = useState(1);
  return (
    <div
      style={{
        width: "100%",
        height: "55px",
        zIndex: "3",
        display: "flex",
        backgroundColor: "#5a5a84",
        //alignItems: "center",
        boxShadow: "0px 3px 5px 3px rgb(0 0 0 / 20%)",
        paddingTop: "15px",
        paddingLeft: "25px",
        gap: "25px",
        position: "fixed",
      }}
    >
      <ActionIcon>
        <AiOutlineMenu
          color="white"
          size={25}
          style={{ display: expand ? "flex" : "none" }}
          onClick={() => setExpand(0)}
        />
        <AiOutlineClose
          color="white"
          size={25}
          style={{ display: !expand ? "flex" : "none" }}
          onClick={() => setExpand(1)}
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
    </div>
  );
}
