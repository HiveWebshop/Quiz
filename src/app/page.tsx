import styles from "./page.module.css";

export default function Home() {

   const data =  
    {
        questions: [
          {
            id: 'abc123457u9',
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

  return (
   <main className={styles.main}>
    <h1>Question 1/x</h1>
    {data.questions.map(question => (
        <>
        <div>{question.question}</div>
        <div>{}</div>
        </>))}
  </main>
    );
};
