import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Making from "./pages/Making/Making";
import Manage from "./pages/Manage/Manage";
import Mentoring from "./pages/Mentoring/Mentoring";
import MentoringDetail from "./pages/Mentoring/MentoringDetail";
import MentoringApply from "./pages/Mentoring/MentoringApply";
import MentoringConfirm from "./pages/Mentoring/MentoringConfirm";
import Making2 from "./pages/Making/Making2";
import Making3 from "./pages/Making/Making3";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/mentoring" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mentoring" element={<Mentoring />} />
      <Route path="/mentoring/detail/:id" element={<MentoringDetail />} />
      <Route path="/mentoring/:id/apply" element={<MentoringApply />} />
      <Route
        path="/mentoring/:id/apply/confirm"
        element={<MentoringConfirm />}
      />
      <Route path="/manage" element={<Manage />} />
      <Route path="/making" element={<Making />} />
      <Route path="/making2" element={<Making2 />} />
      <Route path="/making3" element={<Making3 />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default Router;
