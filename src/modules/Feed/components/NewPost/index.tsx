import { ActionIcon, Button, Slider, Text } from "@mantine/core";
import { useState } from "react";
import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlinePlus,
} from "react-icons/ai";

export default function NewPost() {
  const [expand, setExpand] = useState(true);
  const partyname = "Ling";
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
        <Text
          style={{
            width: "254px",
            height: "50px",
            paddingLeft: "25px",
            fontFamily: "Dosis",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "25px",
            lineHeight: "32px",
            letterSpacing: "0.155em",
            color: "white",
          }}
        >
          {partyname}
        </Text>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            paddingTop: "20px",
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
            Member
          </Text>

          <div
            style={{
              display: "flex",
              flexDirection: "row",

              alignItems: "center",
            }}
          >
            <ActionIcon>
              <AiFillMinusCircle
                style={{
                  display: "flex",
                  width: "10px",
                  height: "10px",
                }}
              ></AiFillMinusCircle>
            </ActionIcon>

            <Slider
              style={{
                width: "165px",
                height: "3px",
              }}
              thumbSize={14}
              min={1}
              max={8}
              color="pink"
              size="sm"
              showLabelOnHover={false}
              marks={[
                { value: 1, label: "1" },
                { value: 2, label: "2" },
                { value: 3, label: "3" },
                { value: 4, label: "4" },
                { value: 5, label: "5" },
                { value: 6, label: "6" },
                { value: 7, label: "7" },
                { value: 8, label: "8" },
              ]}
            />
            <ActionIcon>
              <AiFillPlusCircle
                style={{
                  width: "10px",
                  height: "10px",
                }}
              ></AiFillPlusCircle>
            </ActionIcon>
          </div>
        </div>

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

        <div style={{ flexDirection: "row", gap: "80px" }}>
          <Button
            onClick={() => setExpand(!expand)}
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
