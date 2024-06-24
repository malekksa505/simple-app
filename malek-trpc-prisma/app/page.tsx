import { trpc } from "@/server/client";
import Image from "next/image";

export default function Home() {
  const getUsers = trpc.user.getUsers.useQuery()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(getUsers.data)}
    </main>
  );
}
