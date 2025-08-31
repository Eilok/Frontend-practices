'use client'

import { useRouter } from "next/navigation";

export function StartButton() {
    const router = useRouter();

    function handleClick() {
        router.push('/question/1');    
    }

    return (
        <div className="flex justify-center items-center">
            <button 
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={handleClick}
            >
                Start Quiz
            </button>
        </div>
    )
}