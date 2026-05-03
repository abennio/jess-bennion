import React from "react";
import NavBar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout-shell">
      <NavBar />
      <main className="layout-content">{children}</main>
      <Footer />
    </div>
  );
}
