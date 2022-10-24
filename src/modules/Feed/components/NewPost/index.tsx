import { ActionIcon, Button, Slider, Text, TextInput } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlinePlus,
} from "react-icons/ai";

interface NewPostProps {
  title: string;
  value: number;
}
export default function NewPost() {
  const [expand, setExpand] = useState(true);
  const [value, setValue] = useState(1);
  const [title, setTitle] = useState("");
  const backgroundColor = "#2B4076";
  const border = "1px solid #FDEBEB";

  async function handleNewPost() {
    if (title) {
      setExpand(!expand);
      await axios.post("https://hateelao-api.up.railway.app/posts", {
        title: title,
        partySize: value,
        ownerId: "63555d28c9ad0bf839dcbf87",
      });
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "auto",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "24px",
          paddingBottom: "4px",
          paddingLeft: "31px",
        }}
      >
        <Text
          style={{
            display: "flex",
            width: "180px",
            height: "34px",
            fontFamily: "Dosis",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "27px",
            lineHeight: "34px",
            letterSpacing: "0.155em",
            color: "white",
          }}
        >
          Explore Tee
        </Text>
        <Button
          onClick={() => setExpand(!expand)}
          style={{
            display: "flex",
            width: "84px",
            height: "23px",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          + new party
        </Button>
      </div>

      <div
        style={{
          display: !expand ? "flex" : "none",
          position: "relative",
          width: "310px",
          height: "179px",
          background: "rgba(255, 255, 255, 0.1)",
          opacity: "0.9",
          borderRadius: "10px",
          flexDirection: "column",
        }}
      >
        <TextInput
          placeholder="Party Name"
          variant="unstyled"
          radius="xl"
          value={title}
          onChange={(event) => setTitle(event.currentTarget.value)}
          sx={{
            padding: "10px",
            ".mantine-TextInput-input": {
              color: "white",
              display: "flex",
            },
          }}
        />
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "80px",
            paddingTop: "5px",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              display: "flex",
              width: "70px",
              height: "12px",
              fontFamily: "Dosis",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "12px",
              lineHeight: "15px",
              letterSpacing: "0.155em",
              color: "white",
            }}
          >
            Party Size
          </Text>

          <div
            style={{
              display: "flex",
              flexDirection: "row",

              alignItems: "center",
            }}
          >
            <ActionIcon
              onClick={() => setValue(value - 1 >= 2 ? value - 1 : 2)}
            >
              <AiFillMinusCircle
                style={{
                  display: "flex",
                  width: "10px",
                  height: "10px",
                }}
              ></AiFillMinusCircle>
            </ActionIcon>

            <Slider
              value={value}
              onChange={setValue}
              style={{
                width: "165px",
                height: "3px",
              }}
              sx={{ thumb: ".mantine-Slider-label" }}
              thumbSize={14}
              min={2}
              max={9}
              color="pink"
              size="sm"
              showLabelOnHover={false}
              marks={[
                { value: 2, label: "2" },
                { value: 3, label: "3" },
                { value: 4, label: "4" },
                { value: 5, label: "5" },
                { value: 6, label: "6" },
                { value: 7, label: "7" },
                { value: 8, label: "8" },
                { value: 9, label: "9" },
              ]}
            />
            <ActionIcon
              onClick={() => setValue(value + 1 <= 9 ? value + 1 : 9)}
            >
              <AiFillPlusCircle
                style={{
                  width: "10px",
                  height: "10px",
                }}
              ></AiFillPlusCircle>
            </ActionIcon>
          </div>
        </div>
        {/* <div style={{ display: "flex", flexDirection: "column" }}>
          <Text
            style={{
              display: "flex",
              width: "35px",
              height: "18px",
              justifyContent: "center",
              position: "absolute",
              top: "107px",
              paddingLeft: "39px",
              fontFamily: "Dosis",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "18px",
              letterSpacing: "0.155em",
              color: "#FFFFFF",
            }}
          >
            Type
          </Text>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Button
              style={{
                display: "flex",
                width: "80px",
                height: "15px",
                justifyContent: "center",
                backgroundColor: "#2B4076",
                border: "1px solid #FDEBEB",
                borderRadius: "20px",
              }}
            >
              tee game
            </Button>
            <Button
              style={{
                display: "flex",
                width: "80px",
                height: "15px",
                justifyContent: "center",
                backgroundColor: "#2B4076",
                border: "1px solid #FDEBEB",
                borderRadius: "20px",
              }}
            >
              tee tiaw
            </Button>
          </div>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <Button
              style={{
                display: "flex",
                width: "80px",
                height: "15px",
                justifyContent: "center",
                backgroundColor: "#2B4076",
                border: "1px solid #FDEBEB",
                borderRadius: "20px",
              }}
            >
              tee hit
            </Button>
            <Button
              style={{
                display: "flex",
                width: "80px",
                height: "15px",
                justifyContent: "center",
                backgroundColor: "#2B4076",
                border: "1px solid #FDEBEB",
                borderRadius: "20px",
              }}
            >
              tee r-han
            </Button>
          </div>
        </div> */}
        <div style={{ flexDirection: "row", gap: "80px" }}>
          <Button
            onClick={handleNewPost}
            style={{
              display: "flex",
              position: "absolute",
              width: "68px",
              height: "21px",
              justifyContent: "center",
              borderRadius: "15px",
              left: "50px",
              bottom: "10px",
              backgroundColor: "#2B4076",
            }}
          >
            Create
          </Button>
          <Button
            onClick={() => setExpand(!expand)}
            style={{
              display: "flex",
              position: "absolute",
              width: "68px",
              height: "21px",
              borderRadius: "15px",
              justifyContent: "center",
              right: "50px",
              bottom: "10px",
              backgroundColor: "#2B4076",
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}