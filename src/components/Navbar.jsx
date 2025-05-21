import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThumbnailMenu from "./ThumbnailMenu";
import { useUser } from "../context/UserContextProvider";

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



function Navbar() {
    const [inputValue, setInputValue ] = useState('')
    const debouncedFinal = useDebounce(inputValue,1000)
    const navigate = useNavigate()
    const { loggedIn } = useUser()

   


    useEffect(()=>{
        if(debouncedFinal) {
            navigate(`/search?q=${debouncedFinal}`)
            setInputValue('')
           
        }},[debouncedFinal, navigate])



    const handleLogoClick = () => {
         navigate('/')}; // URL의 ?q=... 제거됨

    

    return(
        <div>
            
            <h1 style={{ cursor: 'pointer' }} onClick={handleLogoClick}>CREAMY'S MOVIE</h1>
            
            
            <input type="검색" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
            
            {loggedIn ? (<ThumbnailMenu/> ) : (
            
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