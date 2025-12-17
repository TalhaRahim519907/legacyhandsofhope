// Imported images
import blueTShirtImg from "../assets/BLUE LHOH T-SHIRTS.webp";
import greenTShirtImg from "../assets/GREEN LHOH T-SHIRTS.webp";
import kingbraceletImg from "../assets/LHOH King Bracelet.webp";
import queenbraceletImg from "../assets/LHOH Queen Bracelet.webp";
import whiteTShirtImg from "../assets/WHITE LHOH T-SHIRTS.webp";
import shippingImg from "../assets/SHIPPING FEE.webp";

const products = [
  {
    id: 1,
    name: "BLUE LHOH T-SHIRTS",
    category: "apparel",
    price: 30,
    description: "Premium cotton t-shirt with LHOH logo",
    image: blueTShirtImg,
    badge: "Popular"
  },
  {
    id: 2,
    name: "GREEN LHOH T-SHIRTS",
    category: "apparel",
    price: 30,
    description: "Comfortable t-shirt with inspiring message",
    image: greenTShirtImg,
    badge: "New"
  },
  {
    id: 3,
    name: "LHOH King Bracelet",
    category: "accessories",
    price: 30,
    description: "Adjustable bracelet with embroidered logo",
    image: kingbraceletImg
  },
  {
    id: 4,
    name: "LHOH Queen Bracelet",
    category: "accessories",
    price: 30,
    description: "Eco-friendly bracelet for everyday use",
    image: queenbraceletImg,
    badge: "Eco-Friendly"
  },
  {
    id: 5,
    name: "WHITE LHOH T-SHIRTS",
    category: "home",
    price: 30,
    description: "Ceramic mug with LHOH design",
    image: whiteTShirtImg
  },
  {
    id: 6,
    name: "SHIPPING FEE",
    category: "home",
    price: 11.95,
    description: "USPS Standard shipping",
    image: shippingImg
  }
];

export default products;
