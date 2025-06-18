import products from "../api/products.json";
import { fetchQuantityFromLS } from "./fetchQuantityFromLS";
import { getCartProductFromLS } from "./getCartProductFromLS";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";

let cartProductLS = getCartProductFromLS();
console.log(cartProductLS);

let filterProducts = products.filter((curProd) =>{
    // console.log(curProd.id);
    return cartProductLS.some((curElem)=> curElem.id === curProd.id);
});

console.log(filterProducts);

const productCartContainer = document.querySelector("#productCartContainer");
const productCartTemplate = document.querySelector("#productCartTemplate");


const showCartProduct = ()=>{
    filterProducts.forEach((curProd) => {

        const {category, id, image, name, stock, price} = curProd;
        let productClone = document.importNode(productCartTemplate.content, true);

        const lSActualData = fetchQuantityFromLS(id, price);

        
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productQuantity").textContent = lSActualData.quantity;
        productClone.querySelector(".productPrice").textContent = lSActualData.price;

        // handle increment and decrement button in cart
        productClone.querySelector(".stockElement").addEventListener("click", (event) => {
            // console.log(id);
            incrementDecrement(event, id, stock, price);
            
        });

        productClone.querySelector(".remove-to-cart-button").addEventListener("click", ()=> removeProdFromCart(id));

        productCartContainer.append(productClone);
    });
};

// showing cart products
showCartProduct();



