import React, { useState } from 'react'
import '../groceries/groceries.css';
import grocer1 from'../../../images/grocer1.jpeg';
import grocer2 from'../../../images/grocer2.jpeg';
import grocery3 from'../../../images/grocery3.jpeg';
import grocery4 from'../../../images/grocery4.jpeg';
import grocery5 from'../../../images/grocery5.jpeg';
import grocery6 from'../../../images/grocery6.jpeg';
import image_9 from'../../../images/image_9.png';
import image_19 from'../../../images/image_19.png';




function Groceries() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const[ count2,setCount2]=useState(0);
  const[ count3,setCount3]=useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const[ count6,setCount6]=useState(0);
  const[ count7,setCount7]=useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  const increment1 = () => setCount1(prev => prev + 1);
  const decrement1 = () => {
    if (count1 > 0) {
      setCount1(prev => prev - 1);
    }
  };


const increment2 = () => setCount2(prev => prev + 1);
  const decrement2 = () => {
    if (count2 > 0) {
      setCount2(prev => prev - 1);
    }
  };


const increment3 = () => setCount3(prev => prev + 1);
  const decrement3 = () => {
    if (count3 > 0) {
      setCount3(prev => prev - 1);
    }
  };


const increment4 = () => setCount4(prev => prev + 1);
  const decrement4 = () => {
    if (count4 > 0) {
      setCount2(prev => prev - 1);
    }
  };


const increment5 = () => setCount5(prev => prev + 1);
  const decrement5 = () => {
    if (count5 > 0) {
      setCount5(prev => prev - 1);
    }
  };


const increment6 = () => setCount6(prev => prev + 1);
  const decrement6 = () => {
    if (count6 > 0) {
      setCount6(prev => prev - 1);
    }
  };
  const increment7 = () => setCount7(prev => prev + 1);
  const decrement7 = () => {
    if (count7 > 0) {
      setCount7(prev => prev - 1);
    }
  };

  return (
    <div className='groceries-container'>
      <div className='groceries-header'>
        <h2>Weekly Best Selling Groceries</h2>
        <div className='groceries-button'>
          <button className='first-button'>Frozen Foods</button>
          <button className='second-button'>Diet Foods</button>
          <button className='third-button'>Healthy Foods</button>
          <button className='fourth-button'>Vitamin items</button>
        </div>
      </div>

      <div className='groceries-first-card'>
       
        <div className='gro-card-1'>
          <div className="gro-image-container">
    <img src={grocer1} alt="Grocery Item" />
    <div className="icon-overlay">
      <span className="icon"> <i className="fas fa-eye icon"></i></span>
      <span className="icon"><i className="fas fa-heart icon"></i></span>
      <span className="icon"><i className="fas fa-share-alt icon"></i></span>
    </div>
  </div>
          <div className='gro-text'>
            <h3>Details: Profitable business makes your profit</h3>
            <h4>500g Pack</h4>
            <h2>$29.00</h2>
            <div className='gro-buttons'>
              <button onClick={increment}>+</button>
              <span id='Count' className='gro-button'>{count}</span>
              <button onClick={decrement}>-</button>
            </div>
          </div>
        </div>

     
        <div className='gro-card-2'>
          <div className="gro-image-container">
    <img src={grocer2} alt="Grocery Item" />
    <div className="icon-overlay">
      <span className="icon"> <i className="fas fa-eye icon"></i></span>
      <span className="icon"><i className="fas fa-heart icon"></i></span>
      <span className="icon"><i className="fas fa-share-alt icon"></i></span>
    </div>
  </div>
          <div className='gro-text'>
            <h3>Details: Profitable business makes your profit</h3>
            <h4>500g Pack</h4>
            <h2>$29.00</h2>
            <div className='gro-buttons'>
              <button onClick={increment1}>+</button>
              <span id='Count1' className='gro-button'>{count1}</span>
              <button onClick={decrement1}>-</button>
            </div>
          </div>
        </div>
      </div>



<div className='groceries-second-card'>
       
        <div className='gro-card-3'>
          <div className="gro-image-container">
    <img src={grocery3} alt="Grocery Item" />
    <div className="icon-overlay">
      <span className="icon"> <i className="fas fa-eye icon"></i></span>
      <span className="icon"><i className="fas fa-heart icon"></i></span>
      <span className="icon"><i className="fas fa-share-alt icon"></i></span>
    </div>
  </div>
          <div className='gro-text'>
            <h3>Details: Profitable business makes your profit</h3>
            <h4>500g Pack</h4>
            <h2>$29.00</h2>
            <div className='gro-buttons'>
              <button onClick={increment2}>+</button>
              <span id='Count2' className='gro-button'>{count2}</span>
              <button onClick={decrement2}>-</button>
            </div>
          </div>
        </div>

     
        <div className='gro-card-4'>
          <div className="gro-image-container">
    <img src={grocery4} alt="Grocery Item" />
    <div className="icon-overlay">
      <span className="icon"> <i className="fas fa-eye icon"></i></span>
      <span className="icon"><i className="fas fa-heart icon"></i></span>
      <span className="icon"><i className="fas fa-share-alt icon"></i></span>
    </div>
  </div>
          <div className='gro-text'>
            <h3>Details: Profitable business makes your profit</h3>
            <h4>500g Pack</h4>
            <h2>$29.00</h2>
            <div className='gro-buttons'>
              <button onClick={increment3}>+</button>
              <span id='Count3' className='gro-button'>{count3}</span>
              <button onClick={decrement3}>-</button>
            </div>
          </div>
        </div>
      </div>




<div className='groceries-third-card'>
       
        <div className='gro-card-4'>
          <div className="gro-image-container">
    <img src={grocery5} alt="Grocery Item" />
    <div className="icon-overlay">
      <span className="icon"> <i className="fas fa-eye icon"></i></span>
      <span className="icon"><i className="fas fa-heart icon"></i></span>
      <span className="icon"><i className="fas fa-share-alt icon"></i></span>
    </div>
  </div>
          <div className='gro-text'>
            <h3>Details: Profitable business makes your profit</h3>
            <h4>500g Pack</h4>
            <h2>$29.00</h2>
            <div className='gro-buttons'>
              <button onClick={increment4}>+</button>
              <span id='Count4' className='gro-button'>{count4}</span>
              <button onClick={decrement4}>-</button>
            </div>
          </div>
        </div>

     
        <div className='gro-card-5'>
          <div className="gro-image-container">
    <img src={grocery6} alt="Grocery Item" />
    <div className="icon-overlay">
      <span className="icon"> <i className="fas fa-eye icon"></i></span>
      <span className="icon"><i className="fas fa-heart icon"></i></span>
      <span className="icon"><i className="fas fa-share-alt icon"></i></span>
    </div>
  </div>
          <div className='gro-text'>
            <h3>Details: Profitable business makes your profit</h3>
            <h4>500g Pack</h4>
            <h2>$29.00</h2>
            <div className='gro-buttons'>
              <button onClick={increment5}>+</button>
              <span id='Count5' className='gro-button'>{count5}</span>
              <button onClick={decrement5}>-</button>
            </div>
          </div>
        </div>
      </div>




<div className='groceries-fourth-card'>
       
        <div className='gro-card-6'>
          <div className="gro-image-container">
    <img src={image_9} alt="Grocery Item" />
    <div className="icon-overlay">
      <span className="icon"> <i className="fas fa-eye icon"></i></span>
      <span className="icon"><i className="fas fa-heart icon"></i></span>
      <span className="icon"><i className="fas fa-share-alt icon"></i></span>
    </div>
  </div>
          <div className='gro-text'>
            <h3>Details: Profitable business makes your profit</h3>
            <h4>500g Pack</h4>
            <h2>$29.00</h2>
            <div className='gro-buttons'>
              <button onClick={increment6}>+</button>
              <span id='Count6' className='gro-button'>{count6}</span>
              <button onClick={decrement6}>-</button>
            </div>
          </div>
        </div>

     
        <div className='gro-card-7'>
          <div className="gro-image-container">
    <img src={image_19} alt="Grocery Item" />
    <div className="icon-overlay">
      <span className="icon"> <i className="fas fa-eye icon"></i></span>
      <span className="icon"><i className="fas fa-heart icon"></i></span>
      <span className="icon"><i className="fas fa-share-alt icon"></i></span>
    </div>
  </div>
          <div className='gro-text'>
            <h3>Details: Profitable business makes your profit</h3>
            <h4>500g Pack</h4>
            <h2>$29.00</h2>
            <div className='gro-buttons'>
              <button onClick={increment7}>+</button>
              <span id='Count7' className='gro-button'>{count7}</span>
              <button onClick={decrement7}>-</button>
            </div>
          </div>
        </div>
      </div>





























    </div>
  );
}

export default Groceries;

