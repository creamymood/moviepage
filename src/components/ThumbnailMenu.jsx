import React from "react";
import { useSupabaseAuth } from "../supabase";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContextProvider";


function ThumbnailMenu() {
  const navigate = useNavigate();
  const { logout } = useSupabaseAuth();
  const { loggedIn, setLoggedIn } = useUser()
  
    
  const handleLogout = async () => {
    // setIsLoggedIn(false); // 로그아웃 시 상태 변경
    // alert("로그아웃되었습니다.");

    const { data, error } =  await logout()
  
      if (error) {
        alert('로그아웃 에러:', error.message)
      } else {
          console.log("로그아웃 성공:", data);
          alert("로그아웃 성공!");
          setLoggedIn(false)
          navigate("/");
      }
  };

  return (
    <div style={{ position: "relative" }}>
      <img
        src="/user-thumbnail.jpg"
        alt="User"
        style={{ width: "40px", borderRadius: "50%", cursor: "pointer" }}
      />
      <div
        style={{
          position: "absolute",
          top: "50px",
          right: 0,
          background: "white",
          border: "1px solid #ddd",
          borderRadius: "6px",
          padding: "10px"
        }}
      >
        <Link to="/mypage">
         <button onClick={() => alert("마이페이지로 이동")}>마이페이지</button>
        </Link>
        <button onClick={handleLogout}>로그아웃</button>
      </div>
    </div>
  );
}

export default ThumbnailMenu;