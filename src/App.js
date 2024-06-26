import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Topbar from "./Components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import SinglePost from "./Components/singlePost/SinglePost";
import { Context } from "./Context/Context";
import About from "./Components/About/About";
import Contact from "./Components/contact/Contact";
//imported components    

function App() {
  const{ user} = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
