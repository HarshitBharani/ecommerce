import { useState } from "react";
import "./login.css";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [login, setLogin] = useState(true);
  function Autheticate() {
    console.log({ email, password });
  }
  return (
    <div className="input-container">
      <div>
        <span onclick={() => setLogin(true)}>login</span>
        <span onclick={() => setLogin(false)}>signup</span>
      </div>
      <div>
        <Login />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name=""
          value={password}
          id=""
          onChange={(e) => SetPassword(e.target.value)}
        />
      </div>
      <button onClick={Autheticate}>SUBMIT</button>
    </div>
  );
}
