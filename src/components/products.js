// Imported images
import blueTShirtImg from "../assets/BLUE LHOH T-SHIRTS.webp";
import greenTShirtImg from "../assets/GREEN LHOH T-SHIRTS.webp";
import kingbraceletImg from "../assets/LHOH King Bracelet.webp";
import queenbraceletImg from "../assets/LHOH Queen Bracelet.webp";
import whiteTShirtImg from "../assets/WHITE LHOH T-SHIRTS.webp";
import blackTShirtImg from "../assets/blackTShirtImg.png"
import shippingImg from "../assets/SHIPPING FEE.webp";

const products = [
  {
    id: 1,
    name: "BLUE LHOH T-SHIRTS",
    categories: ["apparel", "home"],
    price: 30,
    description: "Premium T-shirts with LHOH Logo ",
    image: blueTShirtImg,
    badge: "Popular"
  },
  {
    id: 2,
    name: "GREEN LHOH T-SHIRTS",
    categories: ["apparel", "home"],
    price: 30,
    description: "Premium T-shirts with LHOH Logo ",
    image: greenTShirtImg,
    badge: "New"
  },
  {
    id: 3,
    name: "WHITE LHOH T-SHIRTS",
    categories: ["apparel", "home"],
    price: 30,
    description: "Premium T-shirts with LHOH Logo ",
    image: whiteTShirtImg
  },
  {
    id: 4,
    name: "BLACK LHOH T-SHIRTS",
    categories: ["apparel", "home"],
    price: 30,
    description: "Premium Limited Edition with LHOH Logo ",
    image: blackTShirtImg
  },
  {
    id: 5,
    name: "LHOH King Bracelet",
    categories: ["accessories"],
    price: 30,
    description: "Adjustable bracelet with LHOH logo",
    image: kingbraceletImg
  },
  {
    id: 6,
    name: "LHOH Queen Bracelet",
    categories: ["accessories"],
    price: 30,
    description: "Eco-friendly bracelet for everyday use",
    image: queenbraceletImg,
    badge: "Eco-Friendly"
  },
  {
    id: 7,
    name: "SHIPPING FEE",
    categories: [],
    price: 11.95,
    description: "USPS Standard shipping",
    image: shippingImg
  }
];

export default products;
