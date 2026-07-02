'use server';
import "./globals.css"
import TransitionButton from "./components/TransitionButton";
import LoginButton from "./components/LoginButton";
import {prisma} from "./lib/prisma";

export async function login({email,password}:{email:string,password:string}) {
    const user = await prisma.user.findUnique({
        where:{
            email: email,
        }
    })
    if(user && user.email==email && user.password==password){
        console.log("found user", user)
        return true;
    }else{
        console.log("user not found")
        return false;
    }
}


export default async function Login() {
    return (
        <div>
        <input id="emailLogin" type="text" placeholder="Username" />
        <input id="passwordLogin" type="password" placeholder="Password" />
        <LoginButton/>
        <TransitionButton buttonText="Create Account" pageText="create-account" color="var(--lime)" />
        </div>
    );
}