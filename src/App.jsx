import React from "react";
import { Route, Routes } from "react-router-dom";
import OverView from "./Components/Pages/OverView";
import MyAccount from "./Components/Pages/MyAccount";
import MyDesign from './Components/Pages/MyDesign'
const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<OverView />} />
        <Route path="/MyAccount" element={<MyAccount />} />
        <Route path="/MyDesign" element={<MyDesign />} />
      </Routes>
    </div>
  );
};
export default App;

