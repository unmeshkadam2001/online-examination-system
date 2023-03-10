import axios from "axios";
import React, { useState } from "react";
import "./AddQuestion.css";

function FetchUserDataForm() {
  const [subjectName, setSubjectName] = useState("");
  const [questionLevel, setQuestionLevel] = useState(1);
  const [subjectMarks, setSubjectMarks] = useState(0);
  const [users, setUsers] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        `http://localhost:8080/subject/${subjectName}/level/${questionLevel}/score/${subjectMarks}`
      )
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Student Details Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="subject-name">Subject Name:</label>
        <br />
        <input
          id="subject-name"
          name="subjectName"
          type="text"
          value={subjectName}
          onChange={(event) => setSubjectName(event.target.value)}
        />
        <br />
        <label>Level:</label>
        <br />
        <select
          id="question-level"
          name="questionLevel"
          value={questionLevel}
          onChange={(event) => setQuestionLevel(event.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <br />
        <label htmlFor="marksOfStudent">Enter Marks : </label>
        <br />
        <input
          id="marks"
          name="subjectMarks"
          type="number"
          value={subjectMarks}
          onChange={(event) => setSubjectMarks(event.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <ul style={{ color:"black" }}>
        {users.map((user) => (
          <li key={user.userId}>
            Name: {user.name}, Email: {user.email} , City: {user.city} , state: {user.state}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchUserDataForm;
