import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";
let productSubTotal = document.querySelector(".productSubTotal");
let productFinalTotal = document.querySelector(".productFinalTotal");
   

export const removeProdFromCart =(id) =>{
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

    // update the local storage after removing card
    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));


    // remove the div when clicked on button
    let removeDiv = document.getElementById(`card${id}`);
    if(removeDiv){

        //deleting the price of the div removed
        productSubTotal  = productSubTotal - removeDiv.price;

        //deleting the div
        removeDiv.remove();

        //updating the total amount after removing the product from the cart
        updateCartProductTotal();

    }
    


    updateCartValue(cartProducts);

};