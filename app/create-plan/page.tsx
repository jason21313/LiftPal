import TransitionButton from "../components/TransitionButton";
import Days from "../components/Days";

export default function CreatePage() {
    return (
        <div>
            <h1>Create Plan</h1>
            <TransitionButton buttonText="Click here to return to the home page" pageText="" color="var(--lime)" />
            <Days text="Select Which days You want to have as Rest Days."/>
            <div style={{display: "flex", flexDirection: "row", 
                gap: "25px",justifyContent: "center", 
                alignItems: "center", marginTop: "15px", marginBottom: "15px"}}>
                {[1, 2, 3, 4, 5,6,7].map((i) => (
                <input type="checkbox" style={{width: "30px", height: "20px"}} key={i} />
                ))}
            </div>
            <button>Submit</button>
        </div>
    );
}