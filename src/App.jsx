import React from "react";
import Navbar from "./components/Navbar";
import Mains from "./components/Mains";
import Login from "./components/login";
import Signup from "./components/Signup";
import Footer from "./components/footer";
import Blog from "./components/Blog";
import "./App.css";

function App() {
  return (
    <section className="app--container">
      <Navbar />
      <Mains />
      {/* <Login /> */}
      {/* <Signup /> */}
      <Blog />
      <Footer />
    </section>
  );
}

export default App;
