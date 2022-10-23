import { Center, Image, Text } from "@mantine/core";
import { PostDTO } from "../../types";
import { position } from "./const";

interface FeedCardProps {
  post: PostDTO;
}

export default function FeedCard(props: FeedCardProps) {
  const { post } = props;
  // const position = [
  //   { top: 64, left: 31 },
  //   { top: 127, left: 7 },
  //   { top: 191, left: 29 },
  //   { top: 236, left: 79 },
  //   { top: 236, left: 163 },
  //   { top: 191, left: 224 },
  //   { top: 127, left: 242 },
  //   { top: 64, left: 224 },
  // ];
  // const select = [
  //   [1],
  //   [1, 7],
  //   [1, 3, 7],
  //   [1, 2, 6, 7],
  //   [0, 2, 4, 6, 7],
  //   [0, 1, 2, 6, 7, 7],
  //   [0, 1, 2, 4, 6, 7, 7],
  //   [0, 1, 2, 3, 5, 6, 7, 7],
  // ];
  const scale = post.partySize / 8 + 0.2;
  const users = post.users;
  if (users.length < post.partySize) {
    for (let i = 0; i < post.partySize - users.length; i++) {
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
      style={{
        transform: `scale(${scale})`,
        width: "303px",
        height: "303px",
        display: "flex",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "50%",
        // boxShadow: "0px 3px 5px 3px rgb(0 0 0 / 20%)",
        gap: "20px",
        // background: "linear-gradient(80deg, #F5CAC3 17.71%, #8760F6 99.48%)",
        textAlign: "center",
        // top: "139px",
        justifyContent: "flex-start",
        padding: "25px",
        position: "relative",
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
      <div style={{ display: "flex", overflow: "hidden", borderRadius: "50%" }}>
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
      {post.users.map((user, index) => (
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
