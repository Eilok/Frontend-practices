The quiz app will present users with a series of multiple-choice questions and after each question, the app will provide immediate feedback on whether the selected answer is correct or incorrect.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Requirements

- The user will be initially presented with a “start” button and some detail about the quiz
- When the user presses start they’re presented with the first multiple choice question.
- The questions are to be presented as cards with the answers being buttons on the card.
- When the user selects an answer, the answer buttons are to turn red or green depending on the result. It should also show what the correct answer was.
- If the user answers correctly, a score is to be incremented.
- At the end of the quiz, the user is presented with a final score and all of the results.
- Optionally add a timer of 1 minute to each question, if user doesn’t attempt the question in that time, it should skip to next question and score should be decremented by 1.

## Usage

You can modify `src/data/questions.json` to add or remove questions based on the given format. Then run the program to share your questions with others. 