import "../../App.css";
import { products } from "./data.js";
import { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./Shopify.css";
import axios from "axios";
const Header = () => {
  return (
    <header>
      <h1>Shopify</h1>
      <ShoppingCartIcon />
    </header>
  );
};

const Footer = () => {
  return (
    <footer>
      <div>
        <p>© 2024 Shopify</p>
      </div>
    </footer>
  );
};

const Products = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("rating");
  const [productsList, setProductsList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function sortProducts() {
    if (productsList) {
      switch (sort) {
        case "rating":
          productsList.sort((a, b) => b.rating - a.rating);
          break;
        case "asc":
          productsList.sort((a, b) => b.price - a.price);
          break;
        case "dsc":
          productsList.sort((a, b) => a.price - b.price);
          break;
        default:
          break;
      }
    }
  }

  useEffect(() => {
    sortProducts();
  }, [sort]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://dummyjson.com/products",
      responseType: "json"
    })
      .then((res) => res.data) // not res.json()
      .then((data) => {
        setProductsList(data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="products">
      <h1>Products</h1>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {productsList && (
        <>
          <div className="shopify_inputs">
            <input
              value={search}
              type="search"
              placeholder="Search product..."
              onChange={(e) => setSearch(e.target.value)}
            />

            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="rating">Highly rated</option>
              <option value="asc">From low to high</option>
              <option value="dsc">From high to low</option>
            </select>
          </div>

          <div className="cards">
            {!search &&
              productsList.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}

            {search &&
              productsList
                .filter(
                  (product) =>
                    product.title
                      .toLowerCase()
                      .startsWith(search.toLowerCase()) ||
                    product.category
                      .toLowerCase()
                      .startsWith(search.toLowerCase()) ||
                    product.brand.toLowerCase().startsWith(search.toLowerCase())
                )
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </div>
        </>
      )}
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { title, price, brand, images, description } = product;
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function next() {
    setIndex(index + 1);
    if (index === images.length - 1) {
      setIndex(0);
    }
  }

  function prev() {
    setIndex(index - 1);
    if (index === 0) {
      setIndex(images.length - 1);
    }
  }

  function handleShowMore() {
    setShowMore(!showMore);
  }

  return (
    <div className="card">
      <div className="imgs">
        <ArrowBackIosIcon onClick={prev} style={{ cursor: "pointer" }} />
        <img src={images[index]} alt="" />
        <ArrowForwardIosIcon onClick={next} style={{ cursor: "pointer" }} />
      </div>
      <h3>{title}</h3>
      <h4>${price}</h4>
      <p>{brand}</p>
      <p onClick={handleShowMore} style={{ cursor: "pointer" }}>
        {showMore ? "Hide" : "More..."}
      </p>
      {showMore && <p>{description}</p>}
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Header />
      <Products />
      <Footer />
    </div>
  );
}
