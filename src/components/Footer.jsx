import React from "react";
import "../css/Footer.css"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>company</h4>
              <ul >
                <li>
                  <Link className='link' to="/login">sunup/login</Link>
                </li>
                <li>
                  <Link  className='link' to="/books">Books</Link>
                </li>
                <li>
                  <Link className='link' to="/contact">Contact</Link>
                </li>
              </ul>
            </div>


          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
