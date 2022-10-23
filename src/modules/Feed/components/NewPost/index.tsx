import { Button } from "@mantine/core";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function NewPost() {
  const [expand, setExpand] = useState(true);
  const partyname = "Ling";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        // justifyContent: "flex-start",
      }}
    >
      <text
        style={{
          position: "absolute",
          width: "180px",
          height: "34px",
          left: "31px",
          top: "84px",
          fontFamily: "Dosis",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "27px",
          lineHeight: "34px",
          textAlign: "center",
          letterSpacing: "0.155em",
          color: "white",
        }}
      >
        Explore Tee
      </text>
      <Button
        onClick={() => setExpand(!expand)}
        style={{
          display: "flex",
          position: "absolute",
          width: "84px",
          height: "23px",
          alignContent: "center",
          right: "24px",
          top: "95px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        + new party
      </Button>
      <div
        style={{
          display: !expand ? "flex" : "none",
          position: "relative",
          top: "101px",
          width: "317px",
          height: "150px",
          background: "rgba(255, 255, 255, 0.1)",
          opacity: "0.2",
          borderRadius: "10px",
          flexDirection: "column",
        }}
      >
        <text
          style={{
            position: "absolute",
            width: "254px",
            height: "50px",
            left: "25px",
            top: "2px",
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
        </text>
        <text
          style={{
            position: "absolute",
            width: "230px",
            height: "22px",
            left: "24px",
            top: "44px",
            fontFamily: "Dosis",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "12px",
            lineHeight: "15px",
            letterSpacing: "0.155em",
            color: "white",
          }}
        >
          Member :
        </text>
        <text
          style={{
            position: "absolute",
            width: "35px",
            height: "18px",
            left: "43px",
            top: "79px",
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
        </text>
        <div style={{ flexDirection: "row", gap: "80px" }}>
          <Button
            onClick={() => setExpand(!expand)}
            style={{
              display: "flex",
              position: "absolute",
              width: "68px",
              height: "21px",
              alignItems: "center",
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
              alignContent: "center",
              borderRadius: "15px",
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
