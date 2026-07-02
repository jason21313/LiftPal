'use client';
import { useRouter } from "next/dist/client/components/navigation";
import { createUser } from "../create-account/page";

async function handleCreateAccount() {
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const nameInput = document.getElementById("name") as HTMLInputElement;
    createUser({ email: emailInput.value, password: passwordInput.value, name: nameInput.value });
}


export default function CreateAccountButton() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/Home');
    };
    return (
        <button onClick={()=>{handleCreateAccount();handleClick();}} className="create-account-button">Create Account</button>
    );
}