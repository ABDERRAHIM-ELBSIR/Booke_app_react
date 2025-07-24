import { Link } from "react-router-dom";
import "../css/Home.css";
import { useEffect, useState } from "react";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/data/books_and_users.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
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

  return (
    <div>
      <main className="main-content">
        <section className="products">
          <h2>New Booke</h2>
          <div class="product-list">
            {books.slice(0, 10).map((book) => {
              return (
                <div className="product" key={book.id}>
                  <img src={book.photo} alt="Product photo" />
                  <h3>{book.title}</h3>
                  <p>{book.prix} DH</p>
                </div>
              );
            })}
          </div>
    
            <Link to="/books" className="more-books">
              <h4>more</h4>
            </Link>

        </section>
      </main>
    </div>
  );
}

export default Home;
