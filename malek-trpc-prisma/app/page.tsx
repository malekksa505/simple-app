"use client";
import { trpc } from "@/server/client";
import { useState } from "react";

export default function Home() {
  const getUsers = trpc.user.getUsers.useQuery();
  const addUsers = trpc.user.addUser.useMutation();
  

  const [name, setName] = useState<string>("")
  const [gender, setGender] = useState<string>("")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(getUsers.data)}
      <div>
        Name:{" "}
        <input value={name} onChange={(e) =>setName(e.target.value)} type="text" />
        Gender:{" "}
        <input value={gender} onChange={(e) =>setGender(e.target.value)} type="text" />
        <button onClick={() => addUsers.mutate({name,gender})}>
            Send
        </button>
      </div>
    </main>
  );
}
