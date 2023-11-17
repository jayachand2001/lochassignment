import React, { useState } from "react";
import "./Signup.css";

function validateEmail(email) {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return emailRegex.test(email);
}

export default function Signup() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      document.getElementById("error-message").style.display = "block";
      return;
    }

    window.location.href = "https://app.loch.one/welcome";
  };

  return (
    <div className="signup">
      <p className="heading">Sign up for exclusive access.</p>
      <div id="error-message">
        Please enter a valid email
      </div>
      <input
        className="email"
        type="email"
        name="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="getstarted" onClick={handleSubmit}>
        Get started
      </button>
      <button className="ending">
        <p>You’ll receive an email with an invite link to join.</p>
      </button>
    </div>
  );
}
