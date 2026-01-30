import questions from '../data/questions';
import QuestionItems from './QuestionsItems';

const QuestionList = () => {
  return (
    <div>
      {questions.map((q) => (
        <QuestionItems
          key={q.id}
          question={q.question}
          answer={q.answers}
        />
      ))}
    </div>
  );
};

export default QuestionList;
