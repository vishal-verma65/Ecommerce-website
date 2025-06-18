import { getCartProductFromLS } from "./getCartProductFromLS";

export const incrementDecrement =(event, id, stock, price) => {

            // console.log('id',id);

    const currentCardElement = document.querySelector(`#card${id}`);
    console.log(currentCardElement.id);
    const productQuantity = currentCardElement.querySelector(".productQuantity");
    const productPrice = currentCardElement.querySelector(".productPrice");

    let quantity = 1;
    let localStoragePrice = 0;

    // getting the data from localStorage and checking if the id is present in it or not
    let localCartProducts = getCartProductFromLS();
    console.log(Array.isArray(localCartProducts));
    // console.log(localCartProducts);

    let existingProd = localCartProducts.find((curProd) => curProd.id === id);

    if(existingProd){
        quantity = existingProd.quantity;
        localStoragePrice = existingProd.price;
    }
    else{
        localStoragePrice = price;
        price = price;
    }

    if(event.target.className === "cartIncrement"){
        if(quantity < stock){
            quantity += 1;
        }
        else if(quantity === stock){
            quantity = stock;
            localStoragePrice = price * stock;
        }
    }

    if(event.target.className === "cartDecrement"){
        if(quantity > 1){
            quantity -= 1;
        }
    }

    // update the final local storage price
    localStoragePrice = price * quantity;
    localStoragePrice = Number(localStoragePrice.toFixed(2));

    let updatedCart = {id, quantity, price: localStoragePrice };
    console.log(updatedCart);

    updatedCart = localCartProducts.map((curProd)=>{
        return curProd.id === id ? updatedCart : curProd;
    });
    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

    productQuantity.innerText = quantity;
    productPrice.innerText = localStoragePrice;

};