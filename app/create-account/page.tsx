'use server';
import TransitionButton from "../components/TransitionButton";
import CreateAccountButton from "../components/CreateAccountButton";
import {prisma} from "../lib/prisma";

export async function createUser({email,password,name}:{email:string,password:string,name:string}) {
    const user = await prisma.user.create({
        data:{
            email: email,
            password: password,
            name: name
        }
    })
    console.log(user+"created");
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