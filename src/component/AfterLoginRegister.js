import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './AfterLoginRegister.css';


export default function AfterLoginRegister() {

    let studentId = 2;
    let qId, uId, level;
    const [level1Score, setLevel1Score] = useState(0);
    const [level2Score, setLevel2Score] = useState(0);
    const [level3Score, setLevel3Score] = useState(0);
    const [index, setIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(0);
    const [score, setScore] = useState(0);
    const [currentLevel, setCurrentLevel] = useState(0);
    const [currentLevelScore, setCurrentLevelScore] = useState(0);

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
        status: ''
    }])

    useEffect(() => {
        let url = `http://localhost:8080/displayScoreWithId?id=${studentId}`;
        axios
            .get(url)
            .then(response => {
                console.log("okay so far")
                setLevel1Score(response.data.level1Score);
                setLevel2Score(response.data.level2Score);
                setLevel3Score(response.data.level3Score);
            });
    }, []);


    function currentLevell() {
        if (level1Score == 0) {
            setCurrentLevel(1);
            return 1;
        } else if (level2Score !== 0) {
            setCurrentLevel(2)
            setCurrentLevelScore(level1Score)
            return 2;
        }
        else {
            setCurrentLevel(3)
            setCurrentLevelScore(level2Score)
            return 3;
        }
    }


    function loadSubject(subjectName) {
        level = currentLevell();
        console.log(level)
        let url = `http://localhost:8080/displayQuestionOfParticularSubject?subjectName=${subjectName}&level=${level}`;
        axios
            .get(url)
            .then(response => {
                console.log("okay so far")
                setUserData(response.data);
                if(response.data.length == 0){
                    console.log("You are not eligible for this test")
                }
                console.log(response.data);
                sessionStorage.setItem('userData', userData);
            });
    }
    function handleChange(e){
        e.preventDefault();
        setSelectedOption(e.target.value);        
    }

    function handleClick(e){
        setIndex(index+1)
        console.log(selectedOption)
        if(selectedOption == userData[index].isCorrect){
            setScore(score+1);
        }    
       
        qId = userData[index].questionId;
        uId = 1;
        let url = `http://localhost:8080/setSelectedOption?qId=${qId}&uId=${uId}&selectedOption=${selectedOption}`;
        axios
            .get(url)
            .then(response => {
                console.log("okay so far")
                console.log(response.data);
            });    

    }
    // function handleClickSubmit(e){

    //     let url = `localhost:8080/setScoreWithId?score=${score}&uId=${uId}&level=${level}&sId=${userData[index].subjectId}`;
    //     axios
    //         .get(url)
    //         .then(response => {
    //             console.log("okay so far")
    //             console.log(response.data);
    //             console.log(score)
    //         });    
    // }

    return (
        <div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">OS</h5>
                            <p class="card-text">Your Current Level: {currentLevel}</p>
                            <p class="card-text">Your Current Level Score: {currentLevelScore}</p>
                            <button onClick={() => loadSubject("OS")} className="btn btn-primary">Start Test</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">CN</h5>
                            <p class="card-text">Your Current Level: {currentLevel}</p>
                            <p class="card-text">Your Current Level Score: {currentLevelScore}</p>
                            <button onClick={() => loadSubject("CN")} className="btn btn-primary">Start Test</button>

                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">DBMS</h5>
                            <p class="card-text">Your Current Level: {currentLevel}</p>
                            <p class="card-text">Your Current Level Score: {currentLevelScore}</p>
                            <button onClick={() => loadSubject("DBMS")} className="btn btn-primary">Start Test</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">DSA</h5>
                            <p class="card-text">Your Current Level: {currentLevel}</p>
                            <p class="card-text">Your Current Level Score: {currentLevelScore}</p>
                            <button onClick={() => loadSubject("DSA")} className="btn btn-primary">Start Test</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>

                {userData.length != 0 &&

                    <div className="container mt-5 .bg-primary.bg-gradient" >
                        <div className="d-flex justify-content-center row">
                            <div className="col-md-10 col-lg-10">
                                <div className="border">
                                    <div className="question bg-white p-3 border-bottom">
                                        <div className="d-flex flex-row justify-content-between align-items-center mcq">
                                            <h4>MCQ Quiz</h4><span>({index + 1} of {userData.length})</span>
                                        </div>
                                    </div>


                                    <div className="question p-3 border-bottom" >
                                       { userData[index].status != "inactive" && <div>
                                            <div className="d-flex flex-row align-items-center question-title" >
                                                <h5 className="text-danger">Q.{index+1}</h5>
                                                <h5 className="mt-1 ml-2">{userData[index].questionDesc}</h5>
                                            </div>
                                            <div>
                                                <h6>1] <label >{userData[index].option1}</label><br /> </h6>
                                            </div>
                                            <div>
                                                <h6>2] <label >{userData[index].option2}</label><br /> </h6>
                                            </div>
                                            <div>
                                                <h6>3] <label >{userData[index].option3}</label><br /> </h6>
                                            </div>
                                            <div>
                                                <h6>4] <label >{userData[index].option4}</label><br /> </h6>
                                            </div>
                                            <select id="optionss" name="option" onChange={handleChange}>
                                                <option value="1" >Option 1</option>
                                                <option value="2" >Option 2</option>
                                                <option value="3" >Option 3</option>
                                                <option value="4" >Option 4</option>
                                            </select>
                                            {selectedOption}<br/>
                                            {score}
                                            {userData[index].isCorrect}
                                            <div />
                                        </div>}


                                        <div className="d-flex flex-row justify-content-between align-items-right p-3 bg-white">
                                            <button className="btn btn-primary" type="button" onClick={handleClick}>Next
                                                <i className="fa fa-angle-right ml-2"></i></button>
                                        </div>
                                    </div>
                                        {/* <div className="d-flex flex-row justify-content-between align-items-right p-3 bg-white">
                                            <button className="btn btn-primary" type="button" onClick={handleClickSubmit}>Submit
                                                <i className="fa fa-angle-right ml-2"></i></button>
                                        </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>

        </div>


    )
}
