import { Center, Text } from "@mantine/core";

interface FeedCardProps {
  user: string;
  partySize: string;
}
import { Image } from "@mantine/core";

export default function FeedCard(props: FeedCardProps) {
  const { user, partySize } = props;
  return (
    <div
      style={{
        width: "180px",
        height: "180px",
        display: "flex",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "50%",
        boxShadow: "0px 3px 5px 3px rgb(0 0 0 / 20%)",
        gap: "20px",
        // background: "linear-gradient(80deg, #F5CAC3 17.71%, #8760F6 99.48%)",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Text color="white" size="md" weight={700} style={{ lineHeight: "1px" }}>
        {user}
      </Text>
      <Text color="white" size="xs" weight={100} style={{ lineHeight: "1px" }}>
        {partySize}
      </Text>
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          overflow: "hidden",
          // position: "relative",
          backgroundColor: "red",
        }}
      >
        <Image
          // style={{ objectFit: "cover" }}
          // radius="md"
          src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          alt="With default placeholder"
          // fit="cover"
        />
      </div>
    </div>
  );
}
