import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import AfterLoginRegister from './AfterLoginRegister';


export default function Question() {
 let info = sessionStorage.getItem('userData');
 console.log(info.questionDesc);
  const [userData, setUserData] = useState([{
    isCorrect: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    questionLevel: '',
    questionDesc: '',
    questionId: '',
    subjectId: '',
    subjectName: '',
    subjectNoOfQuestions: '',
    status:''
  }])
  
  const [index, setIndex] = useState(0);  

  useEffect(() => {
    let url = "http://localhost:8080/displayQuestions";
    axios
      .get(url)
      .then(response => {
        console.log(response.data)
        setUserData(response.data);
        console.log("okay so far")
      });
  }, []);

  return(<>
    {userData[0].questionDesc}
    {userData[0].option1}
    {userData[0].option2}
    {userData[0].option3}
    {userData[0].option4}
    {userData[0].isCorrect}
    {userData[0].questionId}
    {userData[0].status}
  </>);
}
