import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartValue } from "./updateCartValue";

export const addToCart = (event, id, stock) =>{

    let arrLocalStorageProduct = getCartProductFromLS();

    const currentProductElem = document.querySelector(`#card${id}`);
    // console.log(currentProductElement, id, stock);

    let quantity = currentProductElem.querySelector(".productQuantity").innerText;
    let price = currentProductElem.querySelector(".productPrice").innerText;
    // console.log(quantity, price);

    price = price.replace("₹", "");
    price = Number(price * quantity);
    quantity = Number(quantity);

    // let updatedCart = {id, quantity, price};
    arrLocalStorageProduct.push({id, quantity, price});
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

    // update the cart button value
    updateCartValue(arrLocalStorageProduct);


};