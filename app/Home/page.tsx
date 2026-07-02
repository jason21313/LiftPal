import Header from "../components/Header";
import Days from "../components/Days";
import Message from "../components/Message";
import CreateEditButtons from "../components/CreateEditButtons";
import TransitionButton from "../components/TransitionButton";

export default function Home() {
  return (
    <>
          <Header />
          <Days text="Which Day's Workout Would you like to track?" work={0} />
          <Message />
          <CreateEditButtons />
          <TransitionButton buttonText="Logout" pageText="" color="var(--lime)" />
    </>
  );
}
