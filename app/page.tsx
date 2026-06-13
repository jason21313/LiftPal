import "./globals.css"
import Header from "./components/Header";
import Days from "./components/Days";
import Message from "./components/Message";
import CreateEditButtons from "./components/CreateEditButtons";

export default function Home() {
  return (
    <>
          <Header />
          <Days text="Which Day's Workout Would you like to track?" />
          <Message />
          <CreateEditButtons />
    </>
  );
}
