import { useState } from 'react';

const QuestionItems = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div style={{ marginBottom: '10px' }}>
      <h3
        onClick={() => setShowAnswer(!showAnswer)}
        style={{ cursor: 'pointer' }}
      >
        {question}
      </h3>

      {showAnswer && <p>{answer}</p>}
      <hr />
    </div>
  );
};

export default QuestionItems;
