import { Route, Routes,Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import ExplorePage from "./Pages/ExplorePage";
import LikePage from "./Pages/LikePage";
import { useAuthContext } from "./Context/AuthContext";
import Sidebar from "./Components/Sidebar"


 
 

function App() {

   const {authUser,loading} = useAuthContext();
   console.log("USer details :",authUser) 
    if(loading){
      return null;
    }
  return (
     <div className=' flex'>
       hello
       <Sidebar/>
         <div>
           <Routes className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
             <Route path="/" element={<HomePage/>} />
             <Route path="/SignUp" element={!authUser?<SignUpPage/>:<Navigate to="/"/>} />
             <Route path="/Login" element={!authUser?<LoginPage/>:<Navigate to="/"/>}  />
             <Route path="/Explore" element={authUser?<ExplorePage/>:<Navigate to="/login"/>} />
             <Route path="/likes" element={authUser?<LikePage/>:<Navigate to="/login"/>}/>

           </Routes>
           
         </div>
        
     </div>
         
  )
}

export default App
