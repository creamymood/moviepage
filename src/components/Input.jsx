// Input.jsx
import React from "react";

function Input({ label, type = "text", value, onChange, error }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      {label && <label style={{ display: "block", marginBottom: "0.5rem" }}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        style={{
          width: "100%",
          padding: "0.5rem",
          border: error ? "1px solid red" : "1px solid #ccc",
          borderRadius: "4px"
        }}
      />
      {error && <p style={{ color: "red", marginTop: "0.5rem" }}>{error}</p>}
    </div>
  );
}

export default Input;

