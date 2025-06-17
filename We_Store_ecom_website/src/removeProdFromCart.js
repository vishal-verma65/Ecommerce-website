import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart =(id) =>{
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

    // update the local storage after removing card
    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));


    // remove the div when clicked on button
    let removeDiv = document.getElementById(`card${id}`);
    if(removeDiv){
        removeDiv.remove();

    }
    
    updateCartValue(cartProducts);

};