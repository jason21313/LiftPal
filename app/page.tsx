'use server';
import "./globals.css"
import TransitionButton from "./components/TransitionButton";
import LoginButton from "./components/LoginButton";
import {prisma} from "./lib/prisma";
import { cookies } from "next/dist/server/request/cookies";


export async function login({email,password}:{email:string,password:string}) {
    const user = await prisma.user.findUnique({
        where:{
            email: email,
        }
    })
    if(user && user.email==email && user.password==password){
        console.log("found user", user)
        const cookieStore = await cookies();
        cookieStore.set('userId', user.id, {httpOnly: true, secure: true, sameSite:'lax', path:'/',maxAge: 60*60*24*7});
        return user.id;
    }else{
        console.log("user not found")
        return " ";
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