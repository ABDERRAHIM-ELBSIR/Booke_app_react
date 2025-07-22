import React from "react";
import "../css/Book_List.css";
import NavBare from "./NavBare";
import Footer from "./Footer";
import { useState } from 'react';


const Booke_liste = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const data = [
    { title: 'HTML', category: 'Web Development' },
    { title: 'PHP', category: 'Web Development' },
    { title: 'C#', category: 'Programming Language' },
    { title: 'JavaScript', category: 'Web Development' },
    { title: 'Bootstrap', category: 'Web Design' },
    { title: 'Python', category: 'Programming Language' },
    { title: 'Android', category: 'App Development' },
    { title: 'Angular JS', category: 'Web Development' },
  ];

  const filteredData = data.filter((item) =>
    Object.values(item).some((val) =>
      val.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <NavBare />
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
                placeholder="Search all fields e.g. HTML"
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
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
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
      <Footer />
    </div>
  );
};

export default Booke_liste;
