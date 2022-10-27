import { useRouter } from "next/router";
import { auth } from "../../config/firebase-config";
import Dashboard from "../../modules/Dashboard";

export default function InvitePage() {
  const router = useRouter();
  const { userId } = router.query;
  return <Dashboard userId={String(userId)} />;
}
