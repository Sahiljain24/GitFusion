import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import ExplorePage from "./Pages/ExplorePage";
import LikePage from "./Pages/LikePage";


 
 

function App() {
 
  return (
     <div className='text-red-600 bg-red-950'>
       hello
       <Sidebar/>
         <div>
           <Routes>
             <Route path="/" element={<HomePage/>} />
             <Route path="/SignUp" element={<SignUpPage/>} />
             <Route path="/Login" element={<LoginPage/>} />
             <Route path="/Explore" element={<ExplorePage/>} />
             <Route path="/likes" element={<LikePage/>} />
           </Routes>
         </div>
        
     </div>
         
  )
}

export default App
