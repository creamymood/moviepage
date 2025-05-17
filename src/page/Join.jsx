import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";

function Join() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [nameError, setNameError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");


    const navigate = useNavigate();
  
  
  
    // 이메일 검사 함수
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    // 이름 검사 함수
    const validateName = (name) => {
        // 2~8자 사이, 숫자, 한글, 영어만 허용
        const nameRegex = /^[가-힣a-zA-Z0-9]{2,8}$/;
        return nameRegex.test(name);
      };
      
  
    // 비밀번호 검사 함수
    const validatePassword = (password) => {
      return password.length >= 6;
    };

    //비밀번호 확인 검사 함수
    const validatePasswordConfirm = (passwordConfirm) => {
        return passwordConfirm === password;
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


    // 이름 입력할 때마다 검사
    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
    
        if (!validateName(value)) {
          setNameError("올바른 이름 형식이 아니에요.");
        } else {
          setNameError("");
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

    // 비밀번호 확인 부분 입력할 때마다 검사
    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
    
        if (!validatePasswordConfirm(value)) {
          setConfirmPasswordError("비밀번호가 일치하지 않습니다.");
        } else {
          setConfirmPasswordError("");
        }
      };
    
  
    
    
    const handleJoin = () => {
      if (!emailError && !passwordError && !nameError && email && password && name && confirmPassword && !confirmPasswordError) {
        alert("회원가입 성공, 로그인 창으로 넘어갑니다.");
        navigate("/login");
      } 
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
    
      if (!emailError && !passwordError && !nameError && email && password && name && confirmPassword && !confirmPasswordError) {
        handleJoin();
      } else {
        alert("입력한 값을 다시 확인해주세요.");
      }
    };
    
  
    return (
      <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit}>
          <Input
            label="이메일"
            type="email"
            value={email}
            onChange={handleEmailChange}
            error={emailError}
          />
          <Input
            label="이름"
            type="name"
            value={name}
            onChange={handleNameChange}
            error={nameError}
          />
          <Input
            label="비밀번호"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
          />

        <Input
            label="비밀번호 확인"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            error={confirmPasswordError}
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
            회원가입
          </button>
        </form>
      </div>
    );
  }

export default Join;