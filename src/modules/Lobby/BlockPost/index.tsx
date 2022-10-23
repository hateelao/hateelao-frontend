import { Text } from "@mantine/core";
import { Image } from "@mantine/core";
interface BlockPostProps {
  title: string;
  desc: string;
  source: string;
}
export default function BlockPost(props: BlockPostProps) {
  const { title, desc, source } = props;
  return (
    <div
      style={{
        width: "90%",
        maxWidth: "303px",
        alignSelf: "center",
        display: "flex",
        backgroundColor: "white",
        borderRadius: "12px",
        flexDirection: "column",
        boxShadow: "0px 3px 5px 3px rgb(0 0 0 / 20%)",
        padding: "20px 20px",
        gap: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "30px",
            height: "30px",
            display: "flex",
            overflow: "hidden",
            borderRadius: "50%",
          }}
        >
          <Image
            height={30}
            width={30}
            src={source}
            alt="With default placeholder"
          ></Image>
        </div>
        <Text
          size="md"
          weight={700}
          style={{
            paddingLeft: "8px",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "20px",
            textAlign: "center",
          }}
        >
          {title}
        </Text>
      </div>

      <Text
        size="xs"
        weight={100}
        style={{
          paddingLeft: "38px",
          textAlign: "justify",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "15px",
        }}
      >
        {desc}
      </Text>
    </div>
  );
}
