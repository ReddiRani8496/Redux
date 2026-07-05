import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess, logout } from "./features/authSlice";
import { addToCart } from "./features/cartSlice";

export default function ProductPage() {
  const dispatch = useDispatch();

  // Accessing different state slices
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const cartItemsCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0),
  );

  const sampleProduct = { id: 101, title: "Wireless Headphones", price: 99 };

  return (
    <div style={{ padding: "20px" }}>
      {/* Auth Section */}
      <header>
        {isLoggedIn ? (
          <div>
            <p>Welcome back, {user.name}!</p>
            <button onClick={() => dispatch(logout())}>Log Out</button>
          </div>
        ) : (
          <button
            onClick={() => dispatch(loginSuccess({ id: 1, name: "Alex" }))}
          >
            Simulate Login
          </button>
        )}
        <p>
          Items in Cart: <strong>{cartItemsCount}</strong>
        </p>
      </header>

      <hr />

      {/* Product Section triggering Cart Slice */}
      <div>
        <h3>{sampleProduct.title}</h3>
        <p>${sampleProduct.price}</p>
        <button onClick={() => dispatch(addToCart(sampleProduct))}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
