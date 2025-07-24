import React from "react";
import "../css/Book_List.css";
import NavBare from "./NavBare";
import Footer from "./Footer";
import { useState, useEffect } from "react";

const Booke_liste = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/data/books_and_users.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("sumthing wrong");
        }
        return res.json();
      })
      .then((data) => {
        setBooks(data.books);
      })
      .catch((error) => {
        console.error("Failed to fetch JSON:", error);
      });
  }, []);


  const filteredData = books.filter((item) =>
  Object.values(item).some((val) =>
    String(val).toLowerCase().includes(searchTerm.toLowerCase())
  )
);

  return (
    <div>
      <div className="container search-table">
        <div className="search-box">
          <div className="row align-items-center">
            <div className="col-md-3">
              <h5>Search All Fields</h5>
            </div>
            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                placeholder="Search all books"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="search-list mt-4">
          <h3>{filteredData.length} Records Found</h3>
          <table className="table" id="myTable">
            <thead>
              <tr>
                <th>Title</th>
                <th>creator</th>
                <th>prix</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.creator}</td>
                    <td>{item.prix}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2">No matching records found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Booke_liste;
