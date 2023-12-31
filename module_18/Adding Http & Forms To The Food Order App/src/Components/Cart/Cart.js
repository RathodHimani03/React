import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import { useContext, useState } from 'react';
import CartContext from '../store/cart-context'
import CartItem from './CartItem';
import Checkout from './Checkout';
import React from 'react';


const Cart = (props) => {

  const cartCtx = useContext(CartContext)

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);

  }

  const cartItemAddHandler = (item) => {

    cartCtx.addItem({ ...item, amount: 1 });
  }


  const cartItems = (
    <ul className={classes['cart-items']}>
      {
        cartCtx.items.map((item) => {
          return <CartItem key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        })
      }
    </ul>
  );

  const orderHandler = () => {
    setIsCheckout(true)
  }

  const modalActions = <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
    {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
  </div>


  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true)
    await fetch('https://http-request-c043d-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items
        })
      });
    setIsSubmitting(false)
    setDidSubmit(true);
    cartCtx.clearItems();
  }

  const CartModelContent = <React.Fragment>
    {cartItems}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>{totalAmount}</span>
    </div>
    {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
    {!isCheckout && modalActions}
  </React.Fragment>


  const isSubmittingModalContent = <p>Sending order data.........</p>
  const didSubmitModalContent = <React.Fragment>
    <p>Successfully sent the Order!</p>
    <button className={classes.submit} onClick={props.onClose} >Close</button>
    </React.Fragment>

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && CartModelContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;