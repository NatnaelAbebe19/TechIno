import React, { useState } from "react";
import Mains from "./components/Mains";
import Login from "./components/login";
import Signup from "./components/Signup";
import Footer from "./components/footer";
import Error from "./components/Error";
import Blog from "./components/Blog";
import Contact from "./components/ContactUs";
import SharedLayout from "./components/SharedLayout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <section className="app--container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Mains />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
