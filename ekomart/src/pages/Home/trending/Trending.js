import React from 'react'
import trend from '../../../images/trend.jpeg'
import trend2 from '../../../images/trend2.jpeg'
import trend3 from '../../../images/trend3.jpeg'
import trend4 from '../../../images/trend4.jpeg'
import trend5 from '../../../images/trend5.jpeg'
import trend6 from '../../../images/trend6.jpeg'
import trend7 from '../../../images/trend7.jpeg'
import trend8 from '../../../images/trend8.jpeg'


function Trending() {
  return (
    
<div className='trend-container'>
        <h2>Products With Discounts</h2>
      <div className='trending'>

 <div className='left-trend-card'>
<div className='trend-card1'>
<img src={trend} alt=''/>
<div className='trend-text'>
<h3> Pastine Mellin Filid</h3>
<h4>500g Pack</h4>
<h2>$36.00</h2>
</div>
</div>

<div className='trend-card2'>
<img src={trend2} alt=''/>
<div className='trend-text2'>
<h3> Pastine Mellin Filid</h3>
<h4>500g Pack</h4>
<h2>$36.00</h2>
</div>
</div>
</div>


        <div className='trend-middel-card'>

<div className='trend-middel-card1'>
<img src={trend3} alt='town -house -bisciut'/>
<div className='trend-middel-text'>
 <h3> Pastine Mellin Filid</h3>
<h4>500g Pack</h4>
<h2>$36.00</h2>

</div>
</div>

<div className='trend-middel-card2'>
<img src={trend4} alt='town -house -bisciut'/>
<div className='trend-middel-text2'>
 <h3> Pastine Mellin Filid</h3>
<h4>500g Pack</h4>
<h2>$36.00</h2>

</div>
</div>
</div>




       <div className='trend-right-card'>

<div className='trend-right-card1'>
<img src={trend5} alt='town -house -bisciut'/>
<div className='trend-right-text'>
<h3> Pastine Mellin Filid</h3>
<h4>500g Pack</h4>
<h2>$36.00</h2>
</div>
</div>

<div className='trend-right-card2'>
<img src={trend6} alt='town -house -bisciut'/>
<div className='trend-right-text2'>
    <h3> Pastine Mellin Filid</h3>
<h4>500g Pack</h4>
<h2>$36.00</h2>
</div>
</div>
        </div>  


<div className='trend-last-card'>

<div className='trend-last-card1'>
<img src={trend7} alt='town -house -bisciut'/>
<div className='trend-last-text'>
    <h3> Pastine Mellin Filid</h3>
<h4>500g Pack</h4>
<h2>$36.00</h2>
</div>
</div>

<div className='trend-last-card2'>
<img src={trend8} alt='town -house -bisciut'/>
<div className='trend-last-text2'>
    <h3> Pastine Mellin Filid</h3>
<h4>500g Pack</h4>
<h2>$36.00</h2>
</div>
</div>
        </div>
      </div>

      </div>









    









    
  )
}

export default Trending
