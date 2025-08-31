import { StartButton } from "@/components/startButton";
import path from 'path'
import fs from 'fs'
import { Question } from "@/components/card";

export async function getQuestions() {
  try {
    const filePath = path.join(process.cwd(), 'src/data/questions.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const questions = JSON.parse(fileData);
    return questions;
  } catch (error) {
    alert("Error reading questions file")
    console.error('Error reading questions file:', error);
    return [];
  }
}

export default async function Home() {
  const questions = await getQuestions();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-4xl font-bold m-8">Welcome to the AI knowledge quiz! 👏</h1>
      <p className="text-center text-2xl m-8">Test your knowledge of AI and get a certificate to show off your skills! 🔥</p>
      <StartButton /> 
    </div>
  );
}
