import React, { useState } from "react";
import axios from "axios";

function QuestionForm() {
  const [subjectName, setSubjectName] = useState("");
  const [subjectNoOfQuestions, setSubjectNoOfQuestions] = useState(0);
  const [questions, setQuestions] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestBody = {
      subjectName: subjectName,
      subjectNoOfQuestions: subjectNoOfQuestions,
      questions: questions,
    };

    try {
      const response = axios
      .post("http://localhost:8080/addSubjectWithQuestionsAndOptions", requestBody, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        console.log(response.data);
      });

      if (response.status === 200) {
        console.log("Data successfully sent to server");
      } else {
        console.log("Server responded with status:", response.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleQuestionChange = (index, event) => {
    const { name, value } = event.target;
    const updatedQuestions = [...questions];
    updatedQuestions[index][name] = value;
    setQuestions(updatedQuestions);
  };

  const handleCorrectOptionChange = (index, event) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].isCorrect = parseInt(event.target.value);
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        questionDesc: "",
        questionLevel: 1,
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        isCorrect: 1,
      },
    ]);
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const renderQuestion = (question, index) => {
    return (
      <div key={index}>
        <h3>Question {index + 1}</h3>
        <label htmlFor={`question-${index}-desc`}>Description:</label>
        <input
          id={`question-${index}-desc`}
          name="questionDesc"
          type="text"
          value={question.questionDesc}
          onChange={(event) => handleQuestionChange(index, event)}
        />

        <label htmlFor={`question-${index}-level`}>Level:</label>
        <select
          id={`question-${index}-level`}
          name="questionLevel"
          value={question.questionLevel}
          onChange={(event) => handleQuestionChange(index, event)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <label htmlFor={`question-${index}-option1`}>Option 1:</label>
        <input
          id={`question-${index}-option1`}
          name="option1"
          type="text"
          value={question.option1}
          onChange={(event) => handleQuestionChange(index, event)}
        />

        <label htmlFor={`question-${index}-option2`}>Option 2:</label>
        <input
          id={`question-${index}-option2`}
          name="option2"
          type="text"
          value={question.option2}
          onChange={(event) => handleQuestionChange(index, event)}
        />
        <label htmlFor={`question-${index}-option3`}>Option 3:</label>
        <input
          id={`question-${index}-option3`}
          name="option3"
          type="text"
          value={question.option3}
          onChange={(event) => handleQuestionChange(index, event)}
        />

        <label htmlFor={`question-${index}-option4`}>Option 4:</label>
        <input
          id={`question-${index}-option4`}
          name="option4"
          type="text"
          value={question.option4}
          onChange={(event) => handleQuestionChange(index, event)}
        />

        <label htmlFor={`question-${index}-correct-option`}>
          Correct Option:
        </label>
        <select
          id={`question-${index}-correct-option`}
          value={question.isCorrect}
          onChange={(event) => handleCorrectOptionChange(index, event)}
        >
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
        </select>

        <button onClick={() => handleRemoveQuestion(index)}>
          Remove Question
        </button>
      </div>
    );
  };

  return (
    <div>
      <h2>Subject Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="subject-name">Subject Name:</label>
        <input
          id="subject-name"
          name="subjectName"
          type="text"
          value={subjectName}
          onChange={(event) => setSubjectName(event.target.value)}
        />
        <label htmlFor="subject-no-of-questions">Number of Questions:</label>
        <input
          id="subject-no-of-questions"
          name="subjectNoOfQuestions"
          type="number"
          value={subjectNoOfQuestions}
          onChange={(event) =>
            setSubjectNoOfQuestions(parseInt(event.target.value))
          }
        />

        <h2>Questions</h2>
        {questions.map(renderQuestion)}

        <button type="button" onClick={handleAddQuestion}>
          Add Question
        </button>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default QuestionForm;
