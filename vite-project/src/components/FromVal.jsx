import { useState, useRef } from "react";

const FromVal = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [validMessage, setValidMessage] = useState("");

  const usernameRef = useRef(null);
  const emailRef = useRef(null);

  const submition = (e) => {
    e.preventDefault();
    setUserNameError("");
    setEmailError("");

    let valid = true;

    if (userName.length < 3) {
      setUserNameError("Username must be more that 3 characters.");
      usernameRef.current.focus();
      valid = false;
    }

    if (!email.includes("@")) {
      setEmailError("email must include a '@'");
      emailRef.current.focus();
      valid = false;
    }

    if (valid) {
      setValidMessage("Form Submited");
      setUsername("");
      setEmail("");
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <form onSubmit={submition}>
        <div>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            ref={usernameRef}
          />
          <p style={{ color: "red" }}>{userNameError}</p>
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={emailRef}
          />
          <p>{emailError}</p>
        </div>

        <button type="submit">Submit</button>
        <p> {validMessage} </p>
      </form>
    </div>
  );
};

export default FromVal;
