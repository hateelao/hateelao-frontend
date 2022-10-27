import { ActionIcon, TextInput } from "@mantine/core";
import axios from "axios";
import { useState } from "react";
import { TbSend } from "react-icons/tb";

interface InputMessageProps {
  show: boolean;
  postId: string;
  firebaseId: string;
}
export default function InputMessage(props: InputMessageProps) {
  const { show, postId, firebaseId } = props;
  const [message, setMessage] = useState("");
  async function handleNewStatus() {
    if (message == "") return;
    await axios.patch(`https://hateelao-api.up.railway.app/lobbies/${postId}`, {
      authorFirebaseId: firebaseId,
      content: message,
    });
    location.reload();
  }
  return (
    <TextInput
      value={message}
      onChange={(event) => setMessage(event.currentTarget.value)}
      placeholder="add text"
      radius="lg"
      style={{
        display: show ? "block" : "none",
        height: "33px",
        width: "303px",
      }}
      sx={{
        ".mantine-TextInput-label": {
          fontWeight: 600,
          fontSize: "12px",
          lineHeight: "155%",
          color: "#FFFFFF",
        },
        ".mantine-TextInput-input": {
          // fontWeight: 600,
          // fontSize: "12px",
          // lineHeight: "155%",
          color: "white",
          backgroundColor: "rgba(255, 255, 255, 0)",
          width: "303px",
          height: "30px",
        },
        ".mantine-TextInput-root": {
          color: "white",
        },
        "	.mantine-TextInput-wrapper": {
          width: "303px",
        },
      }}
      rightSection={
        <ActionIcon
          onClick={handleNewStatus}
          size="lg"
          radius="md"
          style={{
            // display: status == "JOINED" ? "flex" : "none",
            marginBottom: "4px",
            marginTop: "5px",
            marginRight: "5px",
            color: "white",
          }}
        >
          <TbSend size={20} />
        </ActionIcon>
      }
    />
  );
}
