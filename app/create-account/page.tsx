'use server';
import TransitionButton from "../components/TransitionButton";
import CreateAccountButton from "../components/CreateAccountButton";

export async function createUser({email,password,name}:{email:string,password:string,name:string}) {
    // const user = await prisma.user.create({
    //     data:{
    //         email: email,
    //         password: password,
    //         name: name
    //     }
    // })
    const user = email+password+name

    console.log("created user", user)
}

export default async function CreateAccount() {
    return (
        <div>
            <input id="name" type="text" placeholder="Name" />
            <input id="email" type="text" placeholder="Email" />
            <input id="password" type="password" placeholder="Password" />
            <CreateAccountButton/>
            <TransitionButton buttonText="Back" pageText="" color="var(--lime)" />
        </div>
    );
}