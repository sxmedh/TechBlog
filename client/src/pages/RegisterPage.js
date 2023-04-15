import { useState } from "react";
import "../styles/registerPage.css";
import Button from "react-bootstrap/Button";
export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function register(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("registration successful");
    } else {
      alert("registration failed");
    }
  }
  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        className="usernameR"
        type="text"
        placeholder="username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        className="passwordR"
        type="password"
        placeholder="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <Button variant="primary" type="submit">
        Register
      </Button>
    </form>
  );
}
