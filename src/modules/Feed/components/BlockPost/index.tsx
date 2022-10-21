import { Text } from "@mantine/core";
import { Image } from "@mantine/core";
interface BlockPostProps {
  user: string;
  status: string;
  source: string;
}
export default function BlockPost(props: BlockPostProps) {
  const { user, status, source } = props;
  return (
    <div
      style={{
        width: "303px",
        alignSelf: "center",
        display: "flex",
        backgroundColor: "white",
        borderRadius: "12px",
        flexDirection: "column",
        boxShadow: "0px 3px 5px 3px rgb(0 0 0 / 20%)",
        padding: "10px",
        gap: "20px",
      }}
    >
      <div style={{ flexDirection: "row", paddingTop: "10px" }}>
        <div
          style={{
            width: "30px",
            height: "30px",
            display: "flex",
            overflow: "hidden",
            borderRadius: "50%",
            backgroundColor: "red",
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
          style={{ lineHeight: "1px", paddingLeft: "45px" }}
        >
          {user}
        </Text>
      </div>

      <Text size="xs" weight={100}>
        {status}
      </Text>
    </div>
  );
}
