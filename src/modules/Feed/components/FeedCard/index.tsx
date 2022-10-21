import { Center, Image, Text } from "@mantine/core";

interface FeedCardProps {
  user: string;
  partySize: string;
}

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
      <div style={{ display: "flex", overflow: "hidden", borderRadius: "50%" }}>
        <Image
          height={50}
          width={50}
          src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3"
          alt="With default placeholder"
        />
      </div>
    </div>
  );
}
