import React from 'react'

function BottomHeader() {
  return (
    <div className='bottom'>
      <div className='bottom-header'>
<div className='bottom-header-left'>
  <ul>
    <li>AboutUs</li>
    <li>MyAccount</li>
    <li>WhistList</li>
    <li className='line'>We deliver to your everyday from 7:00 to 22:00</li>
  </ul>
</div>

<div className='bottom-header-right'>
<div className='bottom-header-right-1'>
<ul>
  <li className='language'><span>ENGLISH <i className="fas fa-chevron-down"></i></span>
<ul className='drop-down1'>
  <li>Italian</li>
  <li>Spanish</li>
  <li>Arabic</li>
</ul>
  </li>
</ul>
</div>

<div className='right-2'>
  <ul>
    <li className='currency'> <span>USD <i className="fas fa-chevron-down"></i></span>

      <ul className='dropdown2'>
        <li>Rupee</li>
        <li>Dhinar</li>
        <li>Dollar</li>
      </ul>
    </li>
  </ul>
</div>

<div className='right-3'>
<h4>TrackOrder</h4>
</div>
</div>
</div>



    </div>
  )
}

export default BottomHeader
