import TransitionButton from "./TransitionButton";

const day = new Date().toLocaleString('en-US', { weekday: 'short' });

export default function Days({text}: { text: string }){
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return(
        <div>
            <h2>{text}</h2>
        {days.map((d) => (
            <TransitionButton color={day === d ? "#EE82EE" : "var(--lime)"} key={d} buttonText={d} pageText={d} />
        ))}
        </div>
    )
}
