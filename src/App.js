import React from 'react'
import Cart from './components/Cart';
import Navbar from './components/Navbar';

class App extends React.Component {
  
  constructor () {
    super();
    this.state = {
      products : [
        {
            price: 999,
            title: 'Shoes',
            qty: 3,
            img: 'https://dr.savee-cdn.com/things/5/f/77c82b584e581e5a713bb4.jpg',
            id: 1
        },
        {
            price: 39999,
            title: 'Laptop',
            qty: 1,
            img : 'https://dr.savee-cdn.com/things/5/9/6696dbce6f726991366790.jpg',
            id: 2
        },
        {
            price: 3999,
            title: 'Watch',
            qty: 5,
            img: 'https://dr.savee-cdn.com/things/6/0/a79583938aba5c61faf75c.jpg',
            id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }  

onHandleIncrease = (p)=> {
    console.log('Increasing Qty');
    const {products} = this.state;

    const index = products.indexOf(p);

    products[index].qty += 1;
    // console.log(this.products.qty); 
    this.setState({
      products : products
    })   
}  

onHandleDecrease = (p)=>{
    console.log('Decreasing Qty');
    const {products} = this.state;

    const index = products.indexOf(p);

    if(products[index].qty > 0)
         products[index].qty -= 1;
    
         this.setState({
        products : products
    })
}

onHandleDelete = (id)=>{
    console.log('Item Deleted');
    const {products} = this.state;
    const items = products.filter((item)=>{
        return (
            item.id !== id
        )
    })

    this.setState({
        products : items
    })
}
 
getCartCount = ()=>{
  
  const { products } = this.state; 
  let count = 0;

  products.forEach((item)=>{
    count += item.qty;
  })
  console.log('count:',count);
  return count;
}

getCartTotal = ()=>{
    const {products}  = this.state;
    let total = 0;
    
    products.forEach((item)=>{
      total += (item.price*item.qty);
    })
    console.log('total:',total);
    return total;
} 

  render(){ 
    const { products } = this.state; 
    return (
      <div className="App" >
         <Navbar
         count = {this.getCartCount}
         />
         <Cart
         products = {products}
         onIncreaseQty={this.onHandleIncrease}
         onDecreaseQty={this.onHandleDecrease}
         onDelete={this.onHandleDelete}
         />     
         <div>Total: { this.getCartTotal() } </div> 
      </div>
    );
  }
}

export default App;
