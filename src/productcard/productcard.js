import React, { useState } from 'react';

const ProductCard = ({ image, title, price }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const addToCart = () => {
    setIsInCart(true);
    // Add to cart logic
  };

  return (
    <div className="product-card">
      <img src="images/products-icon.png" alt={product} />
      <h3>{product}</h3>
      <p>{price}</p>
      <button onClick={toggleLike}>{isLiked ? 'Unlike' : 'Like'}</button>
      <button onClick={addToCart}>{isInCart ? 'In Cart' : 'Add to Cart'}</button>
    </div>
  );
};

export default ProductCard;
