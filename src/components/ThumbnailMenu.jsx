import React from "react";

function ThumbnailMenu({ setIsLoggedIn }) {
  const handleLogout = () => {
    setIsLoggedIn(false); // 로그아웃 시 상태 변경
    alert("로그아웃되었습니다.");
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
        <button onClick={() => alert("마이페이지로 이동")}>마이페이지</button>
        <button onClick={handleLogout}>로그아웃</button>
      </div>
    </div>
  );
}

export default ThumbnailMenu;