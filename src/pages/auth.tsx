import type { NextPage } from "next";
import { auth } from "../config/firebase-config";
import { AuthPage } from "../modules/AuthPage";
import FeedPage from "../modules/Feed";

const Home3: NextPage = () => {
  return <AuthPage />;
};

export default Home3;
