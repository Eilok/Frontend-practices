'use client';

import { useState } from 'react';
import { useScore } from "@/components/ScoreContext";

export type Question = {
    id: string;
    title: string;
    description: string;
    options: string[];
    correctAnswer: number;
    difficulty: string;
}

type CardProps = {
    question: Question;
}



export function Card({ question }: CardProps) {
    const [answered, setAnswered] = useState(false);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const { score, increaseScore, recordAnswer } = useScore();


    function handleOptionClick(index: number) {
        if (answered) {
            return;
        }
        setAnswered(true);
        setSelectedOption(index);

        // record the answer
        const isCorrect = index === question.correctAnswer;
        recordAnswer(Number(question.id), isCorrect);

        // increase score
        if (isCorrect) {
            increaseScore();
        }
    };

    const getOptionClass = (index: number) => {
        if (!answered) {
            return "p-3 border rounded-md cursor-pointer hover:bg-gray-100 transition-colors"; // not answered
        }

        if (index === question.correctAnswer) {
            return "p-3 border rounded-md bg-green-100 border-green-500"; // correct
        }

        if (index === selectedOption && index !== question.correctAnswer) {
            return "p-3 border rounded-md bg-red-100 border-red-500"; // wrong
        }

        return "p-3 border rounded-md bg-gray-50"; // others
    };

    return (
        <div className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">{question.id}. {question.title}</h2>

            {/* options list */}
            <div className="space-y-2 mb-4">
                {question.options.map((option, index) => (
                    <div 
                        key={index}
                        className={getOptionClass(index)}
                        onClick={() => handleOptionClick(index)}
                    >
                        {option}
                    </div>
                ))}
            </div>

            {/* explanation */}
            {answered && (
                <div>
                    <p className="font-semibold">
                        Reference:
                    </p>
                    <p className="text-gray-700 mb-3">
                        {question.description}
                    </p>
                    <div>
                        <span className="font-semibold">Difficulty: </span>
                        <span>{question.difficulty}</span>
                    </div>
                </div>
            )}
            
        </div>
    )
}