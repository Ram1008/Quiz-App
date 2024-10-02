import { PieChart, RadarChart, PolarGrid, PolarAngleAxis, Radar, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import './ResultsDashboard.scss';

const ResultsDashboard = ({ results = { correctCount: 0, wrongCount: 0, marksObtained: 0 }, quiz = { questions: [], topic: '' }, answers = [] }) => {

  const data = [
    { name: 'Correct', value: results.correctCount },
    { name: 'Wrong', value: results.wrongCount },
  ];

  const COLORS = ['#4CAF50', '#F44336'];

  
  const questionTypeAnalysis = quiz.questions.reduce((acc, question, index) => {
    const isCorrect = question.type === 'single choice' || question.type === 'short ans'
      ? answers[index] === question.answer
      : Array.isArray(answers[index]) && answers[index].join(',') === question.answer.join(',');

    if (!acc[question.type]) {
      acc[question.type] = { type: question.type, correct: 0 };
    }

    if (isCorrect) {
      acc[question.type].correct += 1;
    }

    return acc;
  }, {});

  const questionTypeData = Object.values(questionTypeAnalysis);

  const questionWiseData = quiz.questions.map((question, index) => {
    const isCorrect = question.type === 'single choice' || question.type === 'short ans'
      ? answers[index] === question.answer
      : Array.isArray(answers[index]) && answers[index].join(',') === question.answer.join(',');
  
    return {
      question: `Q${index + 1}`,
      correct: isCorrect ? 1 : 0,
      wrong: isCorrect ? 0 : 1,
      marks: isCorrect ? question.marks : 0,
    };
  });
  


  return (
    <div className="dashboard">
      <h1>
        Results for {quiz.topic} Quiz 
      </h1>
      <span> Correct Answers: {results.correctCount}/{quiz.totalQuestions}</span>
      <div className="chart-container">
        <div className="pie-chart">
          <h2>Overall Performance</h2>
          <PieChart width={400} height={300}>
            <Pie data={data} cx={200} cy={100} outerRadius={80} fill="#8884d8" dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
        <div className="bar-chart">
          <h2>Number of correct answers</h2>
          <BarChart width={400} height={300} data={questionTypeData}>
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="type" />
            <YAxis domain={[0, 'auto']} />
            <Tooltip />
            <Legend />
            <Bar dataKey="correct" fill="#4CAF50" />
          </BarChart>
        </div>
        <div className="question-analysis">
          <h2>Question-wise Performance</h2>
          <RadarChart cx={200} cy={140} outerRadius={120} width={400} height={300} data={questionWiseData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="question" />
          <Radar name="Correct" dataKey="correct" stroke="#4CAF50" fill="#4CAF50" fillOpacity={0.6} />
          <Radar name="Wrong" dataKey="wrong" stroke="#F44336" fill="#F44336" fillOpacity={0.6} />
          <Radar name="Marks" dataKey="marks" stroke="#2196F3" fill="#2196F3" fillOpacity={0.6} />
          <Legend />
          <Tooltip />
        </RadarChart>
        </div>

      </div>

      <div className="marks">
        <h3>Secured Marks: {results.marksObtained}/{quiz.totalMarks}</h3>
      </div>
    </div>
  );
};

export default ResultsDashboard;
