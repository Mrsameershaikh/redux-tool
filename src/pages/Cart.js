import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
    
  };

  const items = useSelector((state) => state.cart);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(items);
  });

  const arr = products.map((item) => item.price);

  const t = arr.reduce((item, number) => {
    return item + number;
  }, 0);

  console.log(t);
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {items.map((product) => (
          <div key={product.id} className="cartCard">
            <img src={product.image} alt="" />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>

            <button className="btn" onClick={() => handleRemove(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <button disabled={true} className="total">
        Total Amount : {t.toFixed(2)}
      </button>
    </div>
  );
};

export default Cart;
