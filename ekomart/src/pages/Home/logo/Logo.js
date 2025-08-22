import React from 'react';
import MartLogo from '../../../images/MartLogo.png';


function LogoSection() {
  return (
    
    <div className='logo-section'>
    <div className='Martlogo'>
      <img src={MartLogo} alt='smartmart' width='100%'/>
    </div>

<div className='Categories'>
  <button><i className="fas fa-layer-group"></i>&nbsp;&nbsp;Categories</button>
</div>

<div className="search">
  <form className='form-style'>
    <input type='text' placeholder='search for product,categories' className='inputtext'></input>
    <button  className='search-button'><i class='fas fa-user-cicle'></i> search</button>
  </form>
</div>


<div className='right-side-buttons'>

<div className='account'>
  <button><i class="fas fa-user-circle"></i>&nbsp; &nbsp;Account</button>
</div>


<div className='share'>
  <button><i class="fas fa-share-alt"></i>&nbsp; &nbsp;</button>
</div>


<div className='whistlist'>
  <button><i class="far fa-heart"></i>&nbsp; &nbsp; Whistlist</button>
</div>


<div className='cart'>
  <button><i class="fas fa-shopping-cart"></i>&nbsp; &nbsp; Cart</button>
</div>
</div>

    </div>


  )
}

export default LogoSection
