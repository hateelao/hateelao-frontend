import { Center, Image, Text } from "@mantine/core";
import { useState } from "react";
import { PostDTO } from "../../types";
import { position } from "./const";

interface FeedCardProps {
  post: PostDTO;
  isLobby?: boolean;
}
interface UserDTO {
  userId: string;
  displayName: string;
  photoURL: string;
  firebaseId: string;
}
export default function FeedCard(props: FeedCardProps) {
  const { post, isLobby } = props;
  const scale = isLobby ? 1 : post.partySize / 8 + 0.2;
  const users = post.users;
  if (users.length < post.partySize) {
    let userLen = users.length;
    if (users[0] == undefined) userLen = 0;
    for (let i = 0; i < post.partySize - 1 - userLen; i++) {
      users.push({
        userId: "",
        displayName: "",
        photoURL: "https://www.colorcombos.com/images/colors/C4C4C4.png",
        firebaseId: "",
      });
    }
  }
  // post.users.length < post.partySize
  return (
    <div
      onClick={() => {
        location.href = `/lobby/${post.postId}`;
      }}
      style={{
        transform: `scale(${scale})`,
        width: "303px",
        height: "303px",
        display: "flex",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "50%",
        gap: "20px",
        textAlign: "center",
        justifyContent: "flex-start",
        padding: "25px",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <Text
        color="white"
        size="md"
        weight={700}
        style={{
          fontWeight: 700,
          fontSize: "20px",
          lineHeight: "20px",
          textAlign: "center",
          letterSpacing: "0.155em",
        }}
      >
        {post.title}
      </Text>
      <Text
        color="white"
        size="xs"
        weight={100}
        style={{
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "18px",
          textAlign: "center",
          letterSpacing: "0.155em",
          marginTop: "-15px",
        }}
      >
        {post.partySize} peoples
      </Text>
      <div
        style={{
          display: "flex",
          overflow: "hidden",
          borderRadius: "50%",
        }}
      >
        <Image
          height={163}
          width={163}
          style={{
            borderRadius: "50%",
            overflow: "hidden",
            left: "70px",
            top: "70px",
            position: "absolute",
          }}
          src={post.owner.photoURL}
          alt={`avatar of ${post.owner.displayName}`}
        />
      </div>
      {users.map((user, index) => (
        <Image
          height={50}
          width={50}
          key={post.title + index}
          style={{
            borderRadius: "50%",
            overflow: "hidden",
            left: position[post.users.length - 1][index].left,
            top: position[post.users.length - 1][index].top,
            position: "absolute",
          }}
          src={user.photoURL}
          alt={`avatar of ${user.displayName}`}
        />
      ))}
      {/* <div>
        {select[post.partySize - 2].map((i, index) => {
          return (
            <Image
              height={50}
              width={50}
              key={post.title + index}
              style={{
                borderRadius: "50%",
                overflow: "hidden",
                left: position[i].left,
                top: position[i].top,
                position: "absolute",
              }}
              src="https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec"
              alt="With default placeholder"
            />
          );
        })}
      </div> */}
    </div>
  );
}
