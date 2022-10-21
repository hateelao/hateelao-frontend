import { Center, Image, Text } from "@mantine/core";

interface FeedCardProps {
  title: string;
  partySize: number;
}

export default function FeedCard(props: FeedCardProps) {
  const { title, partySize } = props;
  const position = [
    { top: 64, left: 31 },
    { top: 127, left: 7 },
    { top: 191, left: 29 },
    { top: 236, left: 79 },
    { top: 236, left: 163 },
    { top: 191, left: 224 },
    { top: 127, left: 242 },
    { top: 64, left: 224 },
  ];
  return (
    <div
      style={{
        // transform: "scale(0.5)",
        width: "303px",
        height: "303px",
        display: "flex",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "50%",
        boxShadow: "0px 3px 5px 3px rgb(0 0 0 / 20%)",
        gap: "20px",
        // background: "linear-gradient(80deg, #F5CAC3 17.71%, #8760F6 99.48%)",
        textAlign: "center",
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
        {title}
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
        {partySize} peoples
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
          src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3"
          alt="With default placeholder"
        />
      </div>
      <div>
        {position.map((pos, index) => {
          return (
            <Image
              height={50}
              width={50}
              key={title + index}
              style={{
                borderRadius: "50%",
                overflow: "hidden",
                left: pos.left,
                top: pos.top,
                position: "absolute",
              }}
              src="https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec"
              alt="With default placeholder"
            />
          );
        })}
      </div>
    </div>
  );
}
