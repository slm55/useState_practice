import React from "react";
import { useState } from "react";

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleClick(e) {
    e.preventDefault();
    if (email == "") {
      alert("Please enter a valid email")
    } else if (password == "") {
      alert("Please enter a valid password")
    } else {
      alert(`You were registered with ${email}`)
    }
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div>
      <form className="registration_form">
        <h1>Registration Form</h1>
        <input style={{outlineColor: email.length < 11 ? "red" : "green"}} type="email" name="email" placeholder="Email" onChange={handleEmailChange} />
        {email.length < 11 && <p>Email should be at least 11 characters</p>}
        <input style={{outlineColor: password.length < 8 ? "red" : "green"}} type="password" name="password" placeholder="Password" onChange={handlePasswordChange}/>
        {password.length < 8 && <p>Password should be at least 8 characters</p>}
        <button type="submit" onClick={handleClick}>Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
