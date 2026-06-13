
const messages = ["Don't forget to stretch before your workout", "Don't forget to stretch after your workout", "Don't forget to drink water"];
const phrase = messages[Math.floor(Math.random() * messages.length)];

export default function Message(){
    return(
        <>
            <h2 id="message">{phrase} </h2>
        </>
    )
}
