import { useRouter } from "next/router";
import Invite from "../../modules/Invite";

export default function InvitePage() {
  const router = useRouter();
  const { postId } = router.query;
  return <Invite postId={String(postId)} />;
}
