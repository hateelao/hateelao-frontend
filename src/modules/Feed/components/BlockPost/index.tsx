import { Text } from "@mantine/core";
import { Image } from "@mantine/core";
interface BlockPostProps {
  user: string;
  status: string;
}
export default function BlockPost(props: BlockPostProps) {
  const { user, status } = props;
  return (
    <div
      style={{
        width: "303px",
        alignSelf: "center",
        display: "flex",
        backgroundColor: "white",
        // alignItems: "center",
        flexDirection: "column",
        borderRadius: "12px",
        boxShadow: "0px 3px 5px 3px rgb(0 0 0 / 20%)",
        padding: "28px",
        // paddingTop: "100px",
        gap: "20px",
      }}
    >
      <>
        <div>
          <Image
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              overflow: "hidden",
              objectFit: "cover",
            }}
            src="https://media.gq-magazine.co.uk/photos/63468efef4f48bee2acb7062/master/pass/Tom-Holland-Spiderman-what-we-know-so-far.jpg"
          ></Image>
        </div>

        <Text size="md" weight={700}>
          {user}
        </Text>
        <Text size="xs" weight={100}>
          {status}
        </Text>
      </>
    </div>
  );
}
