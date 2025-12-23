import React from "react";
import NavBar from "../Navbar/navbar";
import Footer from "../Footer/footer";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}