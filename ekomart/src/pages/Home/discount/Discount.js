import React from 'react'
import discard1 from '../../../images/discard1.jpeg'
import discard2 from '../../../images/discard2.jpeg'
import middel1 from '../../../images/middel1.jpeg'
import middel2 from '../../../images/middel2.jpeg'
import right1 from '../../../images/right1.jpeg'
import right2 from '../../../images/right2.jpeg'
import { useState } from 'react'




function Discount() {
  const [quantity, setQuantity] = useState(0); 
const [quantity1, setQuantity1] = useState(0); 
const [quantity2, setQuantity2] = useState(0); 
const [quantity3, setQuantity3] = useState(0); 




  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };


const increment1 = () => setQuantity1(prev => prev + 1);
  const decrement1 = () => {
    if (quantity1 > 1) {
      setQuantity1(prev => prev - 1);
    }
  };


const increment2 = () => setQuantity2(prev => prev + 1);
  const decrement2 = () => {
    if (quantity2 > 1) {
      setQuantity2(prev => prev - 1);
    }
  };



const increment3 = () => setQuantity3(prev => prev + 1);
  const decrement3 = () => {
    if (quantity3 > 1) {
      setQuantity3(prev => prev - 1);
    }
  };



  return (
    <div className='discount-copntainer'>
        <h2>Products With Discounts</h2>
      <div className='discount'>

        <div className='left-card'>
<div className='card1'>
<img src={discard1} alt=''/>
<div className='text'>
<h3> Organic flavour<br/> fresh juice</h3>
<h5>only</h5>
<h3>$15.00</h3>
</div>
</div>
<div className='card2'>
<img src={discard2} alt=''/>
<div className='text2'>
<h3> Organic flavour<br/> fresh juice</h3>
<h5>only</h5>
<h3>$15.00</h3>
</div>
</div>
</div>


        <div className='middel-card'>

<div className='middel-card1'>
<img src={middel1} alt='town -house -bisciut'/>
<div className='middel-text'>
    <h3>Details Profitable business makes your profit</h3>
<h4>500gm Pack</h4>
<h2>$29.00</h2>
<button onClick={decrement}>-</button>
      <button id="quantity" className="quantity-btn">{quantity}</button>
      <button onClick={increment}>+</button>
<button className='cart-button'>Add to cart<i class="fas fa-shopping-cart"></i></button>
</div>
</div>

<div className='middel-card2'>
<img src={middel2} alt='town -house -bisciut'/>
<div className='middel-text2'>
    <h3>Details Profitable business makes your profit</h3>
<h4>500gm Pack</h4>
<h2>$29.00</h2>
<button onClick={decrement1}>-</button>
      <button id="quantity1" className="quantity-btn">{quantity1}</button>
      <button onClick={increment1}>+</button>
<button className='cart-button'>Add to cart<i class="fas fa-shopping-cart"></i></button>
</div>
</div>
        </div>




<div className='right-card'>

<div className='right-card1'>
<img src={right1} alt='town -house -bisciut'/>
<div className='right-text'>
    <h3>Details Profitable business makes your profit</h3>
<h4>500gm Pack</h4>
<h2>$29.00</h2>
<button onClick={decrement2}>-</button>
      <button id="quantity2" className="quantity-btn">{quantity2}</button>
      <button onClick={increment2}>+</button>
<button className='cart-button'>Add to cart<i class="fas fa-shopping-cart"></i></button>
</div>
</div>

<div className='right-card2'>
<img src={right2} alt='town -house -bisciut'/>
<div className='right-text2'>
    <h3>Details Profitable business makes your profit</h3>
<h4>500gm Pack</h4>
<h2>$29.00</h2>
<button onClick={decrement3}>-</button>
      <button id="quantity3" className="quantity-btn">{quantity3}</button>
      <button onClick={increment3}>+</button>
<button className=' cart-button'>Add to cart<i class="fas fa-shopping-cart"></i></button>
</div>
</div>
        </div>


      </div>
    </div>
  )
}

export default Discount
