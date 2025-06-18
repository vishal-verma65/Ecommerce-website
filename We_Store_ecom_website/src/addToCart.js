import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

// to get cart data from localStorage 
// also to updata the cart value and to get data always ready for localStorage
getCartProductFromLS();


// to add data into localStorage
export const addToCart = (event, id, stock) =>{

    let arrLocalStorageProduct = getCartProductFromLS();

    const currentProductElem = document.querySelector(`#card${id}`);
     // console.log(currentProductElement, id, stock);

    let quantity = currentProductElem.querySelector(".productQuantity").innerText;
    let price = currentProductElem.querySelector(".productPrice").innerText;
    // console.log(quantity, price);

    price = price.replace("₹", "");


    let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id );
    // console.log(existingProd);

    if(existingProd){
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = Number(price * quantity);
        let updatedCart = {id, quantity, price};

        // arrLocalStorageProduct.map((curProd)=>{
        //     if(curProd.id === id){
        //         updatedCart;
        //     }
        //     else{
        //         curProd;
        //     }
        // })

        updatedCart = arrLocalStorageProduct.map((curProd)=>{
            return curProd.id === id ? updatedCart : curProd;
        });
        console.log(updatedCart);
        localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
    }
    else{

    price = Number(price * quantity);
    quantity = Number(quantity);

    // let updatedCart = {id, quantity, price};
    arrLocalStorageProduct.push({id, quantity, price});
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

    }

    // update the cart button value
    updateCartValue(arrLocalStorageProduct);

    //showing card added in the cart
    showToast("add", id);


};