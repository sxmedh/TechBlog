import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import "./styles/bootstrap.min.css";
import "./styles/header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <Navbar bg="primary" variant="dark">
        <Link to="/" className="logo">
          TechBlog
        </Link>
        <nav className="drop">
          {username && (
            <>
              <div className="sep">
                <Link className="create" to="/create">
                  Create new post
                </Link>
              </div>

              <a onClick={logout}>Logout ({username})</a>
            </>
          )}
          {!username && (
            <>
              <Link className="loginH" to="/login">
                Login
              </Link>

              <Link className="registerH" to="/register">
                Register
              </Link>
            </>
          )}
        </nav>
      </Navbar>
    </header>
  );
}
