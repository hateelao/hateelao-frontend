import type { NextPage } from "next";
import { auth } from "../config/firebase-config";
import FeedPage from "../modules/Feed";

const Home2: NextPage = () => {
  const user = auth.currentUser;
  // console.log(user);
  return <h1>Test</h1>;
};

export default Home2;
