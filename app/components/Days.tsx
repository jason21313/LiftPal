import TransitionButton from "./TransitionButton";

const day = new Date().toLocaleString('en-US', { weekday: 'short' });

export default function Days({text,work}: { text: string, work: number }){
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let links: string[];
    if(work === 0){
        links = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    }else if(work === 1){
        links = ["Mon-Create", "Tue-Create", "Wed-Create", "Thu-Create", "Fri-Create", "Sat-Create", "Sun-Create"];
    }else if(work === 2){
        links = ["Mon-Edit", "Tue-Edit", "Wed-Edit", "Thu-Edit", "Fri-Edit", "Sat-Edit", "Sun-Edit"];
    }

    return(
        <div>
            <h2>{text}</h2>
        {days.map((d, index) => (
            <TransitionButton color={day === d ? "#EE82EE" : "var(--lime)"} key={d} buttonText={d} pageText={links[index]} />
        ))}
        </div>
    )
}
