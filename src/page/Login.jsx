// Login.jsx
import React, { useState } from "react";
import Input from "../components/Input";
import { Navigate, useNavigate } from "react-router-dom";
import { useSupabaseAuth } from "../supabase";
import { useUser } from "../context/UserContextProvider";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const { login, loginWithKakao, loginWithGoogle } = useSupabaseAuth();
  const { loggedIn, setLoggedIn } = useUser()
  
  



  // 이메일 검사 함수
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // 비밀번호 검사 함수
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  // 이메일 입력할 때마다 검사
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!validateEmail(value)) {
      setEmailError("올바른 이메일 형식이 아니에요.");
    } else {
      setEmailError("");
    }
  };

  // 비밀번호 입력할 때마다 검사
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (!validatePassword(value)) {
      setPasswordError("비밀번호는 6자 이상이어야 해요.");
    } else {
      setPasswordError("");
    }
  };

  
  const handleLogin = async () => {
    // if (email === "test@test.com" && password === "123456") {
    //   alert("로그인 성공");
    //   navigate("/");
    //   //로그인 한 것 상태 관리
    //   setIsLoggedIn(true)
    // } else {
    //   alert("아이디 또는 비밀번호가 잘못되었습니다.");
    // }

    const { data, error } = await login({
      email,
      password,
      options: {
        data: {
         
        },
      },
    })

    if (error) {
      alert('로그인 에러:', error.message)
    } else {
        console.log("로그인 성공:", data);
        alert("로그인 성공!");
        setLoggedIn(true)
        navigate("/");
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!emailError && !passwordError && email && password) {
      await handleLogin();
    } else {
      alert("입력한 값을 다시 확인해주세요.");
    }
  };

 

  const handleLoginWithKakao = async () => {
    try {
      await loginWithKakao('https://yaliidhzxyxpaumcoyhl.supabase.co/auth/v1/callback');
      setLoggedIn(true);
    
    } catch (error) {
      console.error("Error during Kakao login:", error);
      alert("카카오 로그인에 실패했습니다. 다시 시도해주세요.");
    }
    

  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle('https://yaliidhzxyxpaumcoyhl.supabase.co/auth/v1/callback');
      setLoggedIn(true);
    
    } catch (error) {
      console.error("Error during Kakao login:", error);
      alert("카카오 로그인에 실패했습니다. 다시 시도해주세요.");
    }
    

  };
  
  
  

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="이메일"
          type="email"
          value={email}
          onChange={handleEmailChange}
          error={emailError}
        />
        <Input
          label="비밀번호"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          error={passwordError}
        />
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#333",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          로그인
        </button>
      </form>
      <button onClick={handleLoginWithKakao}>카카오톡으로 로그인하기</button>
      <button onClick={handleGoogleLogin}>구글로 로그인하기</button>

    </div>
  );
}

export default Login;
