import type { NextPage } from "next";
import { auth } from "../config/firebase-config";
import FeedPage from "../modules/Feed";

const Home: NextPage = () => {
  auth.onAuthStateChanged((user) => {
    console.log(user);
  });
  return <FeedPage></FeedPage>;
};

export default Home;
