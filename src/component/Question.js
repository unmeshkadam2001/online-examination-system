import React, { useEffect, useMemo } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Ref } from 'react';
import { useMem } from 'react';

export default function Question() {

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
    subjectNoOfQuestions: ''
  }])

  const [index, setIndex] = useState(0);
  let isRendered = React.useRef(false);

  useEffect(() => {
    let url = "http://localhost:8080/displayQuestions";
    axios
      .get(url)
      .then(response => {
        setUserData(response.data);
        console.log("okay so far")
      });
  }, []);






  return (
    <div>
      {userData.length != 1 &&

        <div className="container mt-5">
          <div className="d-flex justify-content-center row">
            <div className="col-md-10 col-lg-10">
              <div className="border">
                <div className="question bg-white p-3 border-bottom">
                  <div className="d-flex flex-row justify-content-between align-items-center mcq">
                    <h4>MCQ Quiz</h4><span>({index} of 20)</span>
                  </div>
                </div>
                <div className="question bg-white p-3 border-bottom">
                  <div className="d-flex flex-row align-items-center question-title">
                    <h3 className="text-danger">Q.</h3>
                    <h5 className="mt-1 ml-2">{userData[index].questionDesc}</h5>
                  </div>
                  <div>
                  <input type="radio" id="option1"  value="HTML" />
                  <label >{userData[index].option1}</label><br />
                  </div>
                  <div>
                  <input type="radio" id="option2"  value="CSS" />
                  <label >{userData[index].option2}</label><br />
                    
                  </div>
                  <div>
                  <input type="radio" id="option3"  value="JavaScript" />
                  <label >{userData[index].option3}</label><br />

                  </div>
                  <div>
                  <input type="radio" id="option3"  value="JavaScript" />
                  <label >{userData[index].option4}</label><br />
                  </div>

                <div/>
      
          
      
                <div className="d-flex flex-row justify-content-between align-items-right p-3 bg-white">
                   <button className="btn btn-primary" type="button" onClick={() => setIndex(index+1)}>Next
                   <i className="fa fa-angle-right ml-2"></i></button>
               </div>
              </div>
            </div>
          </div>
        </div>      
    </div>
      }
      </div>
  )
}
