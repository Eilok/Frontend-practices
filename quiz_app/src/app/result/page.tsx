"use client"

import { useScore } from '@/components/ScoreContext';
import Link from 'next/link';

export default function ResultPage() {
    const { score, answerRecords, resetScore } = useScore();

    function handleClick() {
        resetScore();
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
            <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-6 text-center">Quiz Completed!</h1>
                
                <div className="text-5xl font-bold text-blue-600 mb-8 text-center">
                    {score} points
                </div>
                
                <h2 className="text-xl font-semibold mb-4">Answer Records：</h2>
                
                <div className="space-y-2 mb-8">
                    {answerRecords.map((record, index) => (
                        <div 
                            key={index} 
                            className={`p-3 border rounded-md ${record.isCorrect ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500'}`}
                        >
                            <div className="flex justify-between items-center">
                                <span>Question {record.questionId}</span>
                                <span>{record.isCorrect ? '✓ Correct' : '✗ Incorrect'}</span>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="text-center">
                    <Link 
                        href="/"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
                        onClick={handleClick}
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}