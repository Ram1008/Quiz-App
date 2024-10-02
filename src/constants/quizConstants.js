export const QuizData = {
      _id:'12345678abc',
      topic: "General Knowledge",
      totalMarks: 15,
      totalDuration: 30*60,
      totalQuestions: 5,
      instructions: "All questions are mendatory and have their specific timer.",
      questions: [
        {
          question: "What is the capital of France?",
          options: ["Berlin", "Madrid", "Paris", "Rome"],
          answer: "Paris",
          type: "single choice",
          marks: 1,
          duration: 15
        },
        {
          question: "What is 2 + 2?",
          options: [],
          answer: "4",
          type: "short ans",
          marks: 2,
          duration: 10
        },
        {
          question: "Which of the following are fruits?",
          options: ["Apple", "Carrot", "Banana", "Potato"],
          answer: ["Apple", "Banana"],
          type: "multiple choice",
          marks: 3,
          duration: 20
        },
        {
          question: "Who wrote 'Romeo and Juliet'?",
          options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"],
          answer: "William Shakespeare",
          type: "single choice",
          marks: 2,
          duration: 10
        },
        {
          question: "Explain the theory of relativity.",
          options: [],
          answer: "A scientific theory regarding the relationship between space and time.",
          type: "short ans",
          marks: 4,
          duration: 5
        }
      ]
    }

  
  