import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context, server } from '../src/main';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Header = () => {
  
  const {isAuthenticated,setIsAuthenticated,loading ,setLoading} = useContext(Context);

  const logOutHandler = async()=>{
    setLoading(true);
    try {
         await axios.get(`${server}/users/logout`,
        {
          withCredentials:true,
        });

        toast.success("LogOut Successfully");
        setIsAuthenticated(false);
        setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(true);
      setLoading(false);
    } 
  }

  return (
    <nav className='header'>
        <div><h2>TODO APP.</h2></div>
        <article>
          <Link to={"/"}>Home</Link>
          <Link to={"/profile"}>Profile</Link>
          {
            isAuthenticated?(<button disabled={loading} onClick={logOutHandler} className='btn'>LOGOUT</button>):(<Link to={"/login"}>LOGIN</Link>)
          }
        </article>
    </nav>
  )
}

export default Header
