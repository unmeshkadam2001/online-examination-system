import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./component/HomePage";

import Question from './component/Question';
import AfterLoginRegister from "./component/AfterLoginRegister";


// const router = createBrowserRouter([
//   {path:'/',element:<HomePage />},
//   // {path:'/Login',element:<Login />},
//   // {path:'/Register',element:<Register />} 
// ])




function App() { 
  return (    
    <div>          
      <AfterLoginRegister />    
      {/* <Question/> */}
      
    </div>    
  );
}

export default App;
