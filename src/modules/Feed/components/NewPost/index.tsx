import { ActionIcon, Button, Slider, Text, TextInput } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlinePlus,
} from "react-icons/ai";
import { auth } from "../../../../config/firebase-config";

interface NewPostProps {
  title: string;
  value: number;
}
export default function NewPost() {
  const [expand, setExpand] = useState(true);
  const [value, setValue] = useState(2);
  const [title, setTitle] = useState("");
  const [userLogin, setUserLogin] = useState(false);

  auth.onAuthStateChanged((user: any) => {
    if (user && !userLogin) {
      // console.log("user login");
      setUserLogin(true);
    }
  });
  async function handleNewPost() {
    if (title) {
      const firebaseId = auth.currentUser?.uid;
      setExpand(!expand);
      await axios.post("https://hateelao-api.up.railway.app/posts", {
        title: title,
        partySize: value + 2,
        ownerId: { firebaseId },
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
            display: userLogin ? "flex" : "none",
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
              onClick={() => setValue(value - 1 >= 0 ? value - 1 : 0)}
            >
              <AiFillMinusCircle
                style={{
                  display: "flex",
                  width: "10px",
                  height: "10px",
                }}
              ></AiFillMinusCircle>
            </ActionIcon>
            {/* <Slider
              style={{
                width: "165px",
                height: "3px",
              }}
              marks={[
                { value: 0, label: "2" },
                { value: 1, label: "3" },
                { value: 2, label: "4" },
                { value: 3, label: "5" },
                { value: 4, label: "6" },
                { value: 5, label: "7" },
                { value: 6, label: "8" },
                { value: 7, label: "9" },
              ]}
              label={null}
              min={0}
              max={7}
              sx={{ thumb: ".mantine-Slider-label" }}
              thumbSize={14}
              value={value}
              onChange={setValue}
            /> */}
            <Slider
              value={value}
              onChange={setValue}
              style={{
                width: "165px",
                height: "3px",
              }}
              label={null}
              sx={{ thumb: ".mantine-Slider-label" }}
              thumbSize={14}
              min={0}
              max={7}
              color="pink"
              size="sm"
              showLabelOnHover={false}
              marks={[
                { value: 0, label: "2" },
                { value: 1, label: "3" },
                { value: 2, label: "4" },
                { value: 3, label: "5" },
                { value: 4, label: "6" },
                { value: 5, label: "7" },
                { value: 6, label: "8" },
                { value: 7, label: "9" },
              ]}
            />
            <ActionIcon
              onClick={() => setValue(value + 1 <= 7 ? value + 1 : 7)}
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
