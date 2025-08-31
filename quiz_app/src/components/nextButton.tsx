"use client";

import { useRouter } from "next/navigation";

import { getQuestions } from "@/app/page";

export function NextButton( {id, questionCount}: {id: string, questionCount: number}) {
    const router = useRouter();

    function handleClick() {
        const nextID = Number(id) + 1;
        if (nextID > questionCount) {
            router.push('/result');
            return;
        }
        router.push(`/question/${nextID}`);
    }

    return (
        <button 
            className="bg-gray-200 rounded-md px-4 py-2 mt-4 cursor-pointer"
            onClick={handleClick}
        >
            Next Question ➡️
        </button>
    )
}