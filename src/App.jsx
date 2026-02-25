import "./App.css";
import { Link } from "react-router-dom";
import tomato from "./assets/images.webp"
import Header from "./Header";

function App() {
  const products = [
  { id: 1, name: "Tomato", price: "2.50", image: tomato },
  { id: 2, name: "Potato", price: "1.80", image: "https://picsum.photos/200?random=2" },
  { id: 3, name: "Onion", price: "2.20", image: "https://picsum.photos/200?random=3" },
  { id: 4, name: "Carrot", price: "1.60", image: "https://picsum.photos/200?random=4" },
  { id: 5, name: "Cabbage", price: "3.00", image: "https://picsum.photos/200?random=5" },
  { id: 6, name: "Cauliflower", price: "3.50", image: "https://picsum.photos/200?random=6" },
  { id: 7, name: "Spinach", price: "2.00", image: "https://picsum.photos/200?random=7" },
  { id: 8, name: "Broccoli", price: "4.20", image: "https://picsum.photos/200?random=8" },
  { id: 9, name: "Capsicum", price: "3.10", image: "https://picsum.photos/200?random=9" },
  { id: 10, name: "Cucumber", price: "1.90", image: "https://picsum.photos/200?random=10" },
  { id: 11, name: "Eggplant", price: "2.70", image: "https://picsum.photos/200?random=11" },
  { id: 12, name: "Green Beans", price: "3.40", image: "https://picsum.photos/200?random=12" },
  { id: 13, name: "Peas", price: "2.80", image: "https://picsum.photos/200?random=13" },
  { id: 14, name: "Pumpkin", price: "5.00", image: "https://picsum.photos/200?random=14" },
  { id: 15, name: "Radish", price: "1.50", image: "https://picsum.photos/200?random=15" },
  { id: 16, name: "Beetroot", price: "2.60", image: "https://picsum.photos/200?random=16" },
  { id: 17, name: "Sweet Corn", price: "3.20", image: "https://picsum.photos/200?random=17" },
  { id: 18, name: "Zucchini", price: "3.00", image: "https://picsum.photos/200?random=18" },
  { id: 19, name: "Lettuce", price: "2.10", image: "https://picsum.photos/200?random=19" },
  { id: 20, name: "Mushroom", price: "4.50", image: "https://picsum.photos/200?random=20" },
  { id: 21, name: "Garlic", price: "2.30", image: "https://picsum.photos/200?random=21" },
  { id: 22, name: "Ginger", price: "3.60", image: "https://picsum.photos/200?random=22" },
  { id: 23, name: "Okra", price: "2.90", image: "https://picsum.photos/200?random=23" },
  { id: 24, name: "Bottle Gourd", price: "3.10", image: "https://picsum.photos/200?random=24" },
  { id: 25, name: "Bitter Gourd", price: "3.40", image: "https://picsum.photos/200?random=25" },
  { id: 26, name: "Drumstick", price: "4.00", image: "https://picsum.photos/200?random=26" },
  { id: 27, name: "Turnip", price: "2.00", image: "https://picsum.photos/200?random=27" },
  { id: 28, name: "Leek", price: "3.20", image: "https://picsum.photos/200?random=28" },
  { id: 29, name: "Celery", price: "2.70", image: "https://picsum.photos/200?random=29" },
  { id: 30, name: "Spring Onion", price: "2.40", image: "https://picsum.photos/200?random=30" }
];

  return (
    <>
      
<Header></Header>
      <div className="container">
        <h1 className="title">Nishith's List Of Products</h1>

        <div className="grid">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">${product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;