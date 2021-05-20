import React, { useRef } from "react";
import "./styles/JoinForm.css";
export default function JoinForm({ fetchProfileData }) {
  const userNameRef = useRef();

  async function handleSubmit(event) {
    event.preventDefault();
    fetchProfileData(userNameRef.current.value);
  }
  return (
    <div className="form-section">
      <form className="form" onSubmit={handleSubmit}>
        <input
          ref={userNameRef}
          placeholder="GitHub Username..."
          className="username-input"
        />
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
}
