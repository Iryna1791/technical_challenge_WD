import logo from './logo.svg';
import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import PhoneDetail from "./components/PhoneDetail";
import PhoneList from "./components/PhoneList";

function App() {
  return (
    <div className="App">
        <PhoneList></PhoneList>

        <Routes>
          <Route
            path="/phones/:id"
            element={<PhoneDetail/>}
          />
        </Routes>
    </div>
  );
}

export default App;