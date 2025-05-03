import React from "react";
import Join from "../page/Join";
import Login from "../page/Login";
import { Link } from "react-router-dom";


function Navbar() {
    return(
        <div>
            <Link to="/">
                <h1>oz무비</h1>
            </Link>
            
            <input type="검색" />
            
            <Link to="/join">
                <button>회원가입</button>
            </Link>
            
            <Link to="/login">

                <button>로그인</button>
            </Link>
            
        </div>
        
    )
}

export default Navbar;