import { Card } from "@/components/card"
import { getQuestions } from "@/app/page";
import { Question } from "@/components/card";
import { NextButton } from "@/components/nextButton";
import { ScorePanel } from "@/components/scorePanel";


async function getQuestionById(id: string) {
    const questions = await getQuestions();
    return questions.find((q: Question) => q.id === id) || null;
}

async function getQuestionCount() {
    const questions = await getQuestions();
    return questions.length;
}

export default async function QuestionPage({params}: { params: Promise<{ id: string}>}) {
    const {id} = await params;
    const question = await getQuestionById(id);
    const questionCount = await getQuestionCount();

    if (!question) {
        alert("Question not found");
        return null;
    }

    return (
        <div className="m-32">
            <div className="flex justify-center">
                <ScorePanel />
            </div>
            <Card question={question} />
            <div className="flex justify-end">
                <NextButton id={id} questionCount={questionCount} />
            </div>
            
        </div>
    )
}