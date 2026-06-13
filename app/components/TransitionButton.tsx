'use client';

import {useRouter} from "next/navigation";

export default function TransitionButton({ buttonText, pageText, color }: { buttonText: string; pageText: string; color: string }) {
    const router = useRouter();

    const handleClick = (pageText: string) => {
        router.push('/' + pageText);
    };

    return (
        <button onClick={() => handleClick(pageText)} style={{ color: color }}>
            {buttonText}
        </button>
    );
}
