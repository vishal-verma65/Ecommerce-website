import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";
let productSubTotal = document.querySelector(".productSubTotal");
   

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

                //show toast when product is added and removed in cart
        showToast("delete", id);

        //updating the total amount after removing the product from the cart
        updateCartProductTotal();

    }
    


    updateCartValue(cartProducts);

};