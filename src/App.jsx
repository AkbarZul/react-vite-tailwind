import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import { LOGIN, ROOT } from "./constans/routeConstans";

function App() {
  return (
    <>
      <Routes>
        <Route exact path={ROOT} element={<Dashboard />} />
        <Route exact path={LOGIN} element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
