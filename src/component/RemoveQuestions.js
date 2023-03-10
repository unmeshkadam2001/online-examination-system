import React, { useState } from "react";
import axios from "axios";
import "./AddQuestion.css";

function RemoveQuestionForm() {
  const [subjectName, setSubjectName] = useState("");
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = axios.get(
        `http://localhost:8080/remove-subject?subjectName=${subjectName}`
      ).then((response) => {
        console.log(response.data);
        setResponseData(response.data);
      });
    } catch (error) {
      setResponseData(null);
    }
    setSubjectName("");
  };

  return (
    <div>
      <h2>Remove Question Form</h2>
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
        <button type="submit">Submit</button>
      </form>
      {responseData && (
        <div style={{color: "red"}}>
          <h3>Response from Server:</h3>
          <pre>{responseData}</pre>
        </div>
      )}
      
    </div>
  );
}

export default RemoveQuestionForm;
