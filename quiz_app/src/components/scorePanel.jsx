"use client";
import { useScore } from "@/components/ScoreContext";

export function ScorePanel() {
    const { score } = useScore();
    return (
        <div className="text-center bg-blue-100 p-3 m-3 rounded-md">
            <span>⏺️current score: </span>
            <span className="text-red-500 font-bold text-xl">{score}</span>
        </div>
    )
}