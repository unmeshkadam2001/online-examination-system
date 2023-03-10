import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";


import HomePage from "./component/HomePage";
import AddQuestion from './component/AddQuestion';
import RemoveQuestionForm from "./component/RemoveQuestions";
import AdminHomePage from "./component/AdminHomePage";
import FetchUserDataForm from "./component/FetchUserData";
import Question from './component/Question';
import AfterLoginRegister from "./component/AfterLoginRegister";


// const router = createBrowserRouter([
//   {path:'/',element:<HomePage />},
//   // {path:'/Login',element:<Login />},
//   // {path:'/Register',element:<Register />} 
// ])


const router = createBrowserRouter([
  {path:'/',element:<HomePage/>},
  {path:'/addQuestion',element:<AddQuestion />},
  {path:'/removeQuestion',element:<RemoveQuestionForm />},
  {path:'/studentDetails',element:<FetchUserDataForm />},
])

function App() {
  return(
    <div>    
      {/* <HomePage/> */}
      <AfterLoginRegister />
      {/* <RouterProvider router={router} /> */}
    </div>
  )
}

export default App;
