'use client';
import { useRouter } from "next/navigation";
import { login } from "../page";

async function handleLogin() {
    const emailInput = document.getElementById("emailLogin") as HTMLInputElement;
    const passwordInput = document.getElementById("passwordLogin") as HTMLInputElement;
    const t = login({email: emailInput.value, password: passwordInput.value});
    return t;
}

export default function LoginButton() {
    const router = useRouter();

        const handleClick = () => {
            router.push('/Home');
        };

    return (
        <button onClick={async ()=>{
            const t = await handleLogin();
            if(t===true){
                handleClick();
            }else{
                alert("Invalid login credentials");
            }
        }} className="login-button">Login</button>
    );
}