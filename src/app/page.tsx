import styles from "./page.module.css";

export default function Home() {

  const hardcoded = {
    questions: [
      {
        id: "abc123457u9",
        question: 'What is the capital of France?',
        answers: [
          { text: 'London', isCorrect: false },
          { text: 'Paris', isCorrect: true },
          { text: 'New York', isCorrect: false },
          { text: 'Dublin', isCorrect: false },
        ],
      },
    ],
  };

  // let hardcoded_val = hardcoded.questions;
  return (
    hardcoded.questions.map((page: any) => {
      page.answers.map((element: any) => {
        <main className={styles.main} >
          <div>{page.question}</div>
          <ul>
            <li>{element.text}</li>
          </ul>
        </main>;
      });
    }));
};
