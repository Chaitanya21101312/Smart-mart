import React from 'react'
import small11 from '../../../images/small11.svg';
import small1 from '../../../images/small1.svg';
import small3 from '../../../images/small3.svg';

import small2 from '../../../images/small2.svg';



function Small() {
  return (
    <div>
        <div className='small-container'>
      <div className='first-card'>
        <img src={small11} alt='dollar'/>
        <div className='horzintal'>
      <h5>Wide Assortment</h5>
      <p>Orders $50 or more</p>
      </div>
</div>

<div className='second-card'>
<img src={small1} alt='dollar'/>
<div className='horzintal'>
<h5>Easy Return Policy</h5>
<p>Orders $50 or more</p>
</div>
</div>


<div className='third-card'>
<img src={small3} alt='dollar'/>
<div className='horzintal'>
<h5>Best Prices & Offers</h5>
<p>Orders $50 or more</p>
</div>
</div>


<div className='fourth-card'>
<img src={small11} alt='dollar'/>
<div className='horzintal'>
<h5>Support 24/7</h5>
<p>Orders $50 or more</p>
</div>
</div>


<div className='fifth-card'>
<img src={small2} alt='dollar'/>
<div className='horzintal'>
<h5>Best Prices & Offers</h5>
<p>Orders $50 or more</p>
</div>
</div>

</div>
    </div>
  )
}

export default Small
