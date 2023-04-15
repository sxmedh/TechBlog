import Header from "./Header";
import { Outlet } from "react-router-dom";
import "./styles/layout.css";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
