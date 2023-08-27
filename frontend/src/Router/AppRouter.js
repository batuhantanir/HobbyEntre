import React from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";

//COMPONENTS
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Components/Home/Home";
import Notifications from "../Components/Notifications/Notifications";
import Message from "../Components/Message/Message";
import Friends from "../Components/Friends/Friends";
import Saved from "../Components/Saved/Saved";
import Settings from "../Components/Settings/Settings";
import Logout from "../Components/Logout/Logout";

const AppRouter = () => {
  return (
    <Routers>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/message" element={<Message />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Routers>
  );
};

export default AppRouter;
