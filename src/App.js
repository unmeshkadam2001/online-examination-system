// import "./App.css";
//import "./product.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddQuestion from './component/AddQuestion';
import RemoveQuestionForm from "./component/RemoveQuestions";
import AdminHomePage from "./component/AdminHomePage";
import FetchUserDataForm from "./component/FetchUserData";
import Question from './component/Question';


const router = createBrowserRouter([
  {path:'/',element:<AdminHomePage />},
  {path:'/addQuestion',element:<AddQuestion />},
  {path:'/removeQuestion',element:<RemoveQuestionForm />},
  {path:'/studentDetails',element:<FetchUserDataForm />},
])

function App() {
  return(
    <div>
      <AdminHomePage />
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
