import React from "react";
import Navbar from "./Navbar";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import HomePage from "../pages/HomePage";
import AddBook from "../pages/Book/AddBook";
import EditBook from "../pages/Book/EditBook";
import DetailBook from "../pages/Book/DetailBook";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AuthContextProvider } from "../context/AuthContext";
import ProtectedRoute from "../routes/ProtectedRoute";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/add-book" element={<AddBook />} />
              <Route path="/edit-book/:id" element={<EditBook />} />
              <Route path="/book/:id" element={<DetailBook />} />
            </Route>

          </Routes>
        </div>
      </AuthContextProvider>
    </Router>
  );
}
export default App;