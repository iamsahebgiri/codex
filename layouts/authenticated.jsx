import { useAuth } from "context/authContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Authenticated({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.push("/");
  }, [user, loading]);

  if (loading) return "loading...";

  return children;
}
