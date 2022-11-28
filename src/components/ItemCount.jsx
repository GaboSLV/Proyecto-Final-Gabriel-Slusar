import {React, useState} from "react";
import '../styles/itemcount.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import swal from "sweetalert";

function ItemCount({stock, initial, onAdd}) {
    const [quantity, setQuantity ] = useState(initial);


    function handleAdd() {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }else {
            swal("Lo lamentamos, no tenemos stock de este producto.", "error");
        }
    }

    function handleSubtract() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    function addToCart() {
        onAdd(quantity);
        swal("Agregado al carrito", "Articulo añadido al carrito.", "success");
    }

    return(
        <div className="item-count">
            <div className="item-count-box">
                <span className="count-button" id="item-count-minus" onClick={handleSubtract}>-</span>
                <div className="qty-display">{quantity}</div>
                <span className="count-button" id="item-count-plus" onClick={handleAdd}>+</span>
            </div>
            <div className="item-count__button">
                <FontAwesomeIcon icon={faShoppingCart} className="item__button" onClick={addToCart}/>
            </div>
        </div>
    )
}


export default ItemCount;