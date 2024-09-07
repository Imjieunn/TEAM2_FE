import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Making from "./pages/Making/Making";
import Manage from "./pages/Manage/Manage";
import Mentoring from "./pages/Mentoring/Mentoring";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mentoring" element={<Mentoring />} />
      <Route path="/manage" element={<Manage />} />
      <Route path="/making" element={<Making />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default Router;
