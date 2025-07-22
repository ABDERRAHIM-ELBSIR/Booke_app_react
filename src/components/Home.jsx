import "../css/Home.css";
import NavBare from "./NavBare";
import Footer from "./Footer";
import img from "../img/img.png"

function Home() {
  return (
    <div>
      <NavBare />

      <main class="main-content">
        <section class="products">
          <h2>New Booke</h2>
          <div class="product-list">
            <div class="product">
              <img src= {img}  alt="Product xx" />
              <h3>Product 1</h3>
              <p>$10.00</p>
            </div>
            <div class="product">
              <img src= {img}  alt="Product xx" />
              <h3>Product 1</h3>
              <p>$10.00</p>
            </div>
            <div class="product">
              <img src= {img}  alt="Product xx" />
              <h3>Product 1</h3>
              <p>$10.00</p>
            </div>
            <div class="product">
              <img src= {img}  alt="Product xx" />
              <h3>Product 1</h3>
              <p>$10.00</p>
            </div>
            <div class="product">
              <img src= {img}  alt="Product xx" />
              <h3>Product 1</h3>
              <p>$10.00</p>
            </div>
            <div class="product">
              <img src= {img}  alt="Product xx" />
              <h3>Product 1</h3>
              <p>$10.00</p>
            </div>
            <div class="product">
              <img src= {img}  alt="Product xx" />
              <h3>Product 1</h3>
              <p>$10.00</p>
            </div>
            <div class="product">
              <img src= {img}  alt="Product xx" />
              <h3>Product 1</h3>
              <p>$10.00</p>
            </div>
            <div class="product">
              <img src= {img}  alt="Product xx" />
              <h3>Product 1</h3>
              <p>$10.00</p>
            </div>

          </div>
          <a href="n">
            <h4>more</h4>
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
