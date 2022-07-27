import React from 'react';

const CartItem = (props) => {
  
  //for object desconstructuring var names should be in sequence as to the the way the object properties are mentioned during declaration 
  //if there is any value that doesn't hv to be used in th object u can just leave a space like " ..,  ,.." this    
  const { price, title, qty , img } = props.product;
  //used obj deconstructing so that the argujment passed in the function of even listners 
  //can written as just 'product' instead of 'this.props.product'
  const {product} = props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} src={img} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              onClick={ ()=>{ props.onIncreaseQty(product)} }
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
              onClick={ ()=>{ props.onDecreaseQty(product)} }
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
              onClick={ ()=>{ props.onDelete(product.id)} }
            />
          </div>
        </div>
      </div>
    );
  
}

//styles Object to render Css Styling
const styles = {
  image: {
    height: 115,
    width: 115,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;