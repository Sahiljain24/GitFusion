import { createContext, useContext, useEffect, useState } from "react";
import {toast} from "react-hot-toast"

export const AuthContext = createContext();
export const useAuthContext=()=>{
    return useContext(AuthContext);
}

const AuthContextProvider =({props})=>{
       
    const [authUser,setAuthUser] =useState(nul);
    const [loading,setLoading] =useState(true);
     
    useEffect( ()=>{
        const checkUserLoggedIn=async()=>{
        setLoading(true)
        try{
            const res= await fetch("/api/auth/check",{credentials:"include"});
            const data = res.json();
            setAuthUser(data.user);
        }
        catch(err){
            toast.error(err);
           }
           finally{
            setLoading(false);
           }
        }
        checkUserLoggedIn();
    },[]);

    return (
        <AuthContext.Provider value={{setAuthUser,authUser,loading}}>
            {props}
        </AuthContext.Provider>
    )
}