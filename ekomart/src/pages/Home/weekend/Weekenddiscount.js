import React from 'react'
import weekend1 from '../../../images/weekend1.jpeg';
import weekend2 from '../../../images/weekend2.jpeg';
import weekend3 from '../../../images/weekend3.jpeg';
import weekend4 from '../../../images/weekend4.jpeg';


function Weekenddiscount() {
  return (
    <div className='weekend-container'>
        <div className='weekend-card1'>
            <img src={weekend1} alt='week'/>
            <div className='week-sub-container'>
<button>Weekend Discount</button>
<h2>Drink Fresh Corn Juice</h2>
<h3> Good Taste</h3>
<h5><i className="fas fa-plus"></i>&nbsp; &nbsp;Shop Now</h5>
</div>
 </div>



<div className='weekend-card2'>
    <img src={weekend2} alt='week'/>
    <div className='week-sub-container2'>
<button>Weekend Discount</button>
<h2>Organic Lemon Flavored</h2>
<h3> Banana Chips</h3>
<h5><i className="fas fa-plus"></i>&nbsp; &nbsp;Shop Now</h5>
</div>
 </div>




<div className='weekend-card3'>
    <img src={weekend3} alt='week'/>
    <div className='week-sub-container3'>
<button>Weekend Discount</button>
<h2>Nozes Pecanera Brasil</h2>
<h3> Chocolate Snacks</h3>
<h5><i className="fas fa-plus"></i>&nbsp; &nbsp;Shop Now</h5>
</div>
 </div>


<div className='weekend-card4'>
    <img src={weekend4} alt='week'/>
    <div className='week-sub-container4'>
<button>Weekend Discount</button>
<h2>Strawberry Water Drinks</h2>
<h3> Flavors Awesome</h3>
<h5><i className="fas fa-plus"></i>&nbsp; &nbsp;Shop Now</h5>
</div>
 </div>



    </div>
  )
}

export default Weekenddiscount
