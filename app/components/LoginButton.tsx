'use client';
import { useRouter } from "next/navigation";
import { login } from "../page";


async function handleLogin() {
    const emailInput = document.getElementById("emailLogin") as HTMLInputElement;
    const passwordInput = document.getElementById("passwordLogin") as HTMLInputElement;
    const t = await login({email: emailInput.value, password: passwordInput.value});
    return t;
}

export default function LoginButton() {
    const router = useRouter();

        const handleClick = () => {
            router.push('/Home');
        };

    const handleKeyDown = async (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === 'Enter') {
            const t = await handleLogin();
            if(t && t !== " "){
                handleClick();
            }else{
                alert("Invalid login credentials");
            }
        }
    };

    return (
        <button onKeyDown={handleKeyDown} onClick={async ()=>{
            const t = await handleLogin();
            if(t && t !== " "){
                handleClick();
            }else{
                alert("Invalid login credentials");
            }
        }} className="login-button">Login</button>
    );
}