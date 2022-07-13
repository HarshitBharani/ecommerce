import { useState } from "react";
import "./login.css";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  return (
    <div className="input-container">
      <div>
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
    </div>
  );
}
