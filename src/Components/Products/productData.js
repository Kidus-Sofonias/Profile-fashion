import Product1 from "../../assets/images/product/Product_1.JPG";
import Product2 from "../../assets/images/product/Product_2.JPG";
import Product3 from "../../assets/images/product/Product_3.JPG";
import Product4 from "../../assets/images/product/Product_4.JPG";
import Product5 from "../../assets/images/product/Product_5.JPG";
import Product6 from "../../assets/images/product/Product_6.JPG";
import Product7 from "../../assets/images/product/Product_7.JPG";
import Product8 from "../../assets/images/product/Product_8.JPG";

const titles = [
  "SHOES",
  "DRESS",
  "HIJAB",
  "MAKEUP",
  "DECORE",
  "COSMO",
  "BAGS",
  "WEDDING DRESS",
];

const prices = [
  "ETB 9,000.00",
  "ETB 8,500.00",
  "ETB 7,000.00",
  "ETB 5,000.00",
  "ETB 6,500.00",
  "ETB 10,000.00",
  "ETB 4,000.00",
  "ETB 15,000.00",
];

const images = [
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
  Product6,
  Product7,
  Product8,
];

const productData = titles.map((title, index) => ({
  title,
  image: images[index],
  price: prices[index],
}));

export default productData;
