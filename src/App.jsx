import { Routes,Route } from "react-router-dom";
import Home from "../pages/Home.jsx"
import Profile from "../pages/Profile.jsx"
import Login from "../pages/Login.jsx"
import Register from "../pages/Register.jsx"
import Header from "../components/Header.jsx"
import { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";
import { Context, server } from "./main.jsx";
import axios from "axios";

function App() {

  const {setUser,setIsAuthenticated,setLoading} = useContext(Context);
  
  useEffect(()=>{
    setLoading(true);
    axios.get(`${server}/users/me`,{
      withCredentials:true,
    }).then((res)=>{
      setUser(res.data.user);
      setIsAuthenticated(true);
      setLoading(false);
    }).catch((error)=>{
      setUser({});
      setIsAuthenticated(false);
      setLoading(false);
    });
  },[]);

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    <Toaster/>
    </>
  )
}

export default App;
