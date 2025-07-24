import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Add_booke from "./admin/Add_booke";
import Booke_liste from "./Booke_liste";
import NavBare from "./NavBare";
import Footer from "./Footer";
import Dashboard from "./admin/Dashbord";
import Edite_book from "./admin/Edite_book";
import Dash_nav from "./admin/Dash_nav";
import LoginPaje from "./LoginPaje";
import ContactPaje from "./ContactPaje";
import { useState, useEffect } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("/data/books_and_users.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("sumthing wrong");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data.users);
      })
      .catch((error) => {
        console.error("Failed to fetch JSON:", error);
      });
  }, []);

  // Login handler
  const handleLogin = (email, password) => {
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );
    if (foundUser) {
      setCurrentUser(foundUser);
      console.log(currentUser);
      return true;
    }
    return false;
  };

  return (
    <div>
      <BrowserRouter>
         <NavBare />
        <Routes>
       

          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Booke_liste />} />
          <Route path="/login" element={<LoginPaje onLogin={handleLogin} />} />
          <Route path="/contact" element={<ContactPaje />} />

          {currentUser?.role === "admin" && (
            <>
              <Route path="/add_booke" element={<Add_booke />} />
              <Route path="/add_book" element={<Add_booke />} />
              <Route path="/dashbord" element={<Dashboard />} />
              <Route path="/edite_book" element={<Edite_book />} />
            </>
          )}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
