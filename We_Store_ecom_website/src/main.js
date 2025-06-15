import { showProductsContainer } from './homeProductCards';
import './style.css';
import products from "/api/products.json";

console.log(products);
console.log(Array.isArray(products));

// Calling a function that takes an array of products as input
showProductsContainer(products);
