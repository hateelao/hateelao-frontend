import { useRouter } from "next/router";
import Lobby from "../../modules/Lobby";

export default function Lobbypage() {
  const router = useRouter();
  const { id } = router.query;
  //   console.log(id);
  return <Lobby postId={String(id)} />;
}
