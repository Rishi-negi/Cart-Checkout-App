import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
    
        const { products } = props;

        return(
            <div className="cart">
                {products.map( (item) => {
                    return (
                       <CartItem 
                       product={item} 
                       key={item.id}  
                       onIncreaseQty={props.onIncreaseQty}
                       onDecreaseQty={props.onDecreaseQty}
                       onDelete={props.onDelete}
                       />
                    )
                })}
            </div>
        );
}

export default Cart;