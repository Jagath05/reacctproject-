import milk from "../assets/img/milk.jpg";
import milk1 from "../assets/img/milk1.jpg";
import orange from "../assets/img/orange.jpg";
import st from "../assets/img/st.jpg";

const products = [
  {
    id: 1,
    category: "Milk",
    name: "Organic Whole Milk",
    size: "1 gallon",
    price: 45,
    oldPrice: 50,
    rating: "4.8 (234)",
    sale: true,
    image: milk,
  },
  {
    id: 2,
    category: "Milk",
    name: "Oat Milk Barista Edition",
    size: "32 oz",
    price: 60,
    rating: "4.7 (189)",
    new: true,
    image: milk1,
  },
  {
    id: 3,
    category: "Juice",
    name: "Cold-Pressed Orange Juice",
    size: "32 oz",
    price: 60,
    oldPrice: 80,
    rating: "4.9 (312)",
    sale: true,
    image: orange,
  },
  {
    id: 4,
    category: "Milkshakes",
    name: "Strawberry Milkshake",
    size: "16 oz",
    price: 60,
    rating: "4.8 (201)",
    new: true,
    image: st,
  },
];

export default products;