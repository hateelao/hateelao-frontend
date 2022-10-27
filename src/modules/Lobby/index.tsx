import {
  ActionIcon,
  Button,
  Center,
  CopyButton,
  Image,
  Text,
  TextInput,
} from "@mantine/core";
import BlockPost from "./BlockPost";
import FeedCard from "../Feed/components/FeedCard";
import { TbSend } from "react-icons/tb";
import { useEffect, useState } from "react";
import { PostDTO } from "../Feed/types";
import axios from "axios";
import { auth } from "../../config/firebase-config";
import InputMessage from "./components/InputMessage";

interface LobbyProps {
  postId: string;
}
interface ChatDTO {
  id: string;
  content: string;
  author: {
    displayName: string;
    photoURL: string;
    firebaseId: string;
  };
}
interface LobbyDTO {
  post: PostDTO;
  chat: ChatDTO[];
  status: string;
}
export default function Lobby(props: LobbyProps) {
  const { postId } = props;
  const [data, setData] = useState<LobbyDTO>({
    post: {
      postId: "",
      title: "",
      partySize: 0,
      users: [],
      pendingUsers: [],
      owner: {
        userId: "",
        displayName: "",
        photoURL: "",
        firebaseId: "",
      },
    },
    chat: [],
    status: "NOT_JOINED",
  });
  const [inviteLink, setInviteLink] = useState("");
  const { post, chat, status } = data;
  const [firebaseId, setFirebaseId] = useState("");
  auth.onAuthStateChanged((user) => {
    if (user) setFirebaseId(user.uid);
  });
  const loadData = async () => {
    let firebaseRoute = "/noUser";
    if (firebaseId != "") firebaseRoute = `/${firebaseId}`;
    const res = await axios.get(
      `https://hateelao-api.up.railway.app/lobbies/${postId}${firebaseRoute}`
    );
    console.log(res.data);
    setData(res.data);
  };
  useEffect(() => {
    if (postId != "undefined") loadData();
    setInviteLink("localhost:3000/invite/" + postId);
  }, [postId, firebaseId]);

  async function handleNewMember() {
    console.log(
      `https://hateelao-api.up.railway.app/posts/${postId}/users/add`
    );
    const res = await axios.patch(
      `https://hateelao-api.up.railway.app/posts/${postId}/users/add`,
      { users: [firebaseId] }
    );
    location.reload();
    // console.log(res.data);
  }

  return (
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
      <Text
        style={{
          fontWeight: 700,
          fontSize: "27px",
          lineHeight: "34px",
          color: "#FFFFFF",
        }}
      >
        Lobby
      </Text>
      <div
        style={{
          display: status == "JOINED" ? "flex" : "none",
          flexDirection: "row",
          alignItems: "flex-end",
          gap: "10px",
        }}
      >
        <TextInput
          placeholder="Invite link"
          label="Invite link"
          radius="lg"
          size="md"
          value={inviteLink}
          readOnly
          sx={{
            ".mantine-TextInput-label": {
              fontWeight: 600,
              fontSize: "12px",
              lineHeight: "155%",
              color: "#FFFFFF",
            },
            ".mantine-TextInput-input": {
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0)",
              width: "279px",
              height: "30px",
            },
          }}
        />
        <CopyButton value={inviteLink}>
          {({ copied, copy }) => (
            <Button
              size="md"
              radius="lg"
              onClick={copy}
              style={{ backgroundColor: copied ? "black" : "grey" }}
            >
              {copied ? "Copied url" : "Copy url"}
            </Button>
          )}
        </CopyButton>
      </div>

      <FeedCard post={post} isLobby></FeedCard>

      {chat.map((singleChat) => (
        <BlockPost
          key={singleChat.id}
          title={singleChat.author.displayName}
          desc={singleChat.content}
          source={singleChat.author.photoURL}
        />
      ))}
      <InputMessage
        show={status == "JOINED"}
        postId={postId}
        firebaseId={firebaseId}
      />
      <Button
        onClick={handleNewMember}
        color="gray"
        size="xl"
        compact
        style={{
          display: status == "JOINED" || firebaseId == "" ? "none" : "flex",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          justifyContent: "center",
        }}
      >
        Join
      </Button>
    </div>
  );
}
