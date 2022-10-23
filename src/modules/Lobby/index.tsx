import {
  ActionIcon,
  Button,
  Center,
  Image,
  Text,
  TextInput,
} from "@mantine/core";
import BlockPost from "../Feed/components/BlockPost";
import FeedCard from "../Feed/components/FeedCard";
import { TbSend } from "react-icons/tb";

export default function Lobby() {
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
          flexDirection: "row",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <TextInput
          placeholder="Invite link"
          label="Invite link"
          radius="lg"
          size="md"
          value="Test"
          readOnly
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
              width: "279px",
              height: "30px",
            },
          }}
        />
        <Button
          color="gray"
          radius="lg"
          size="lg"
          compact
          style={{ marginBottom: "4px", marginLeft: "20px" }}
        >
          copy
        </Button>
      </div>
      <FeedCard title={"TEE-NOI"} partySize={8}></FeedCard>
      <BlockPost
        title={"MaStEr"}
        desc={"Valo"}
        source={"https://sm.ign.com/ign_ap/screenshot/default/ashwins_78um.jpg"}
      ></BlockPost>
      <BlockPost
        title={"Patunaban"}
        desc={"Valo"}
        source={
          "data:image/jpeg;base64,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"
        }
      ></BlockPost>
      <BlockPost
        title={"AlPACA"}
        desc={"Valo"}
        source={
          "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/09/04/16/alpaca.jpg?width=1200"
        }
      ></BlockPost>
      <BlockPost
        title={"Differential"}
        desc={"WarFrame"}
        source={
          "data:image/png;base64,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"
        }
      ></BlockPost>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="add text"
          radius="lg"
          style={{
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
              width: "279px",
              height: "30px",
            },
            ".mantine-TextInput-root": {
              color: "white",
            },
            "	.mantine-TextInput-wrapper": {
              width: "279px",
            },
          }}
          rightSection={
            <ActionIcon
              size="lg"
              radius="md"
              style={{
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
      </div>
      ;
    </div>
  );
}
