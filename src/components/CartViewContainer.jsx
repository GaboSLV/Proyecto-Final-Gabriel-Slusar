import React from "react";
import { useContext } from "react";
import cartContext from "../context/CartContext";
import CartView from "./CartView";


function CartViewContainer() {
    const {quantityInCart} = useContext(cartContext)
    if(quantityInCart() > 0) {
        return <CartView/>;
    }else {
        return <p style={{textAlign: 'center', fontSize: '2rem', marginTop: '10rem'}}>No hay nada que mostrar aún. 😢</p>
    }
}

export default CartViewContainer;