
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import grocer1 from '../../../images/grocer1.jpeg'
import grocer2 from '../../../images/grocer2.jpeg'
import grocery3 from '../../../images/grocery3.jpeg'
import grocery4 from '../../../images/grocery4.jpeg'
import grocery5 from '../../../images/grocery5.jpeg'
import grocery6 from '../../../images/grocery6.jpeg'






function Featuregrocery() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const groceryData = [
    { id: 1, image: grocer1 },
    { id: 2, image: grocer2 },
    { id: 3, image: grocery3 },
    { id: 4, image: grocery4 },
    { id: 5, image: grocery5 },
    { id: 6, image: grocery6 },
  ];

  return (
    <div className='grocery-container'>
      <h2>Feature Grocery</h2>
      <Swiper
  modules={[Navigation]}
  navigation
  spaceBetween={5}  
  slidesPerView={1}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
        {groceryData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className='grocery-card'>
              <img src={item.image} alt='' />
              <div className='grocery-text'>
                <h3>Details Profitable business makes your profit</h3>
                <h4>500gm Pack</h4>
                <h2>$29.00</h2>
                <div className="quantity-controls">
                  <button onClick={decrement}>-</button>
                  <button id="quantity" className="quantity-btn">{quantity}</button>
                  <button onClick={increment}>+</button>
                </div>
                <button className='grocery-cart-button'>
                  Add to cart <i className="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Featuregrocery;
