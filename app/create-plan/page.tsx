import TransitionButton from "../components/TransitionButton";
import Days from "../components/Days";

export default function CreatePage() {
    return (
        <div>
            <h1>Create Plan</h1>
            <TransitionButton buttonText="Click here to return to the home page" pageText="Home" color="var(--lime)" />
            <input type="text" placeholder="Enter Plan Name" />
            
            <Days text="Select Which days You want to have as Rest Days." work={1}/>
            <button>Submit</button>
        </div>
    );
}