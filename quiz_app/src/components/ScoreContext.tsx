'use client';
import { createContext, useState, useContext } from 'react';

const ScoreContext = createContext<{ score: number; answerRecords: { questionId: number; isCorrect: boolean }[]; increaseScore: () => void; recordAnswer: (questionId: number, isCorrect: boolean) => void; resetScore: () => void }>({
    score: 0,
    answerRecords: [],
    increaseScore: () => {},
    recordAnswer: () => {},
    resetScore: () => {},
});

export function ScoreProvider({ children }: { children: React.ReactNode }) {
    // record the score
    const [score, setScore] = useState(0);

    // record the answer situation
    const [answerRecords, setAnswerRecords] = useState<{ questionId: number; isCorrect: boolean }[]>([]);

    const recordAnswer = (questionId: number, isCorrect: boolean) => {
        setAnswerRecords(prevRecords => [...prevRecords, { questionId, isCorrect }]);
    } 

    const increaseScore = () => {
    setScore(prevScore => prevScore + 1);
    };

    const resetScore = () => {
        setScore(0);
        setAnswerRecords([]);
    };

    return (
    <ScoreContext.Provider value={{ score, answerRecords, increaseScore, recordAnswer, resetScore }}>
        {children}
    </ScoreContext.Provider>
    );
}

// use context hook
export function useScore() {
    return useContext(ScoreContext);
}