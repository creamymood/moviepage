import React, { useEffect, useState } from "react";
import Join from "../page/Join";
import Login from "../page/Login";
import { Link, useNavigate } from "react-router-dom";
import ThumbnailMenu from "./ThumbnailMenu";

// useBounce 훅 만들기. 
function useDebounce (value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value)

   useEffect(()=> {
    const handler = setTimeout(()=> {
        setDebouncedValue(value)
     }, delay)
     return() => {
        clearTimeout(handler)
     }
   },[delay, value])

   return debouncedValue
}



function Navbar({isLoggedIn, setIsLoggedIn}) {
    const [inputValue, setInputValue ] = useState('')
    const debouncedFinal = useDebounce(inputValue,1000)
    const navigate = useNavigate()


    
   


    useEffect(()=>{
        if(debouncedFinal) {
            navigate(`/search?q=${debouncedFinal}`)
            setInputValue('')
           
        }
        
    },[debouncedFinal, navigate])

    const handleLogoClick = () => {
        
        navigate('/')}; // URL의 ?q=... 제거됨

    

    return(
        <div>
            
            <h1 style={{ cursor: 'pointer' }} onClick={handleLogoClick}>CREAMY'S MOVIE</h1>
            
            
            <input type="검색" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
            
            {isLoggedIn ? (<ThumbnailMenu setIsLoggedIn={setIsLoggedIn}/> ) : (
            
            <>
            <Link to="/join">
                <button>회원가입</button>
            </Link>
            
            <Link to="/login">

                <button>로그인</button>
            </Link>
            </> )
            }
            
            
        </div>
        
    )
}

export default Navbar;