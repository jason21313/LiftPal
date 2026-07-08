'use client';

import {useRouter} from "next/navigation";
import { Logout } from "../Home/page";

export default function TransitionButton({ buttonText, color }: { buttonText: string; color: string }) {
    const router = useRouter();

    const handleClick = async (pageText: string) => {
        Logout();
        router.push('/' + pageText);
    };

    return (
        <button onClick={() => handleClick("")} style={{ color: color }}>
            {buttonText}
        </button>
    );
}