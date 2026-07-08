'use server';

import Header from "../components/Header";
import Days from "../components/Days";
import Message from "../components/Message";
import CreateEditButtons from "../components/CreateEditButtons";
import LogoutButton from "../components/LogoutButton";
import { cookies } from "next/headers";

export async function Logout(){
        const cookieStore = await cookies();
        cookieStore.delete('userId');
}

export default async function Home() {
  return (
    <>
          <Header />
          <Days text="Which Day's Workout Would you like to track?" work={0} />
          <Message />
          <CreateEditButtons />
          <LogoutButton buttonText="Logout" color="var(--lime)" />
    </>
  );
}
