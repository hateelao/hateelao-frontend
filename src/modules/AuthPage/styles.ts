import { createStyles } from "@mantine/core";
import { TbScale } from "react-icons/tb";

export const useStyles = createStyles((theme) => ({
  brandButton: {
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "-10px",
    cursor: "pointer",
  },
  facebookButton: {},
  googleButton: {},
  loginText: {
    verticalAlign: "center",
    fontSize: "30px",
    color: "white",
    letterSpacing: "0.155em",
    marginBottom: "0px",
  },
  mainDiv: {
    width: "100vw",
    // height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    // transform: "scale(1.0)",
  },
}));
