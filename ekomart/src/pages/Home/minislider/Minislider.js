import React from 'react'
import './Minislider.css'; 
import image_1 from '../../../images/image_1.png';
import image_2 from '../../../images/image_2.png';
import image_3 from '../../../images/image_3.png';
import image_4 from '../../../images/image_4.png';
import image_5 from '../../../images/image_5.png';
import image_7 from '../../../images/image_7.png';
import image_8 from '../../../images/image_8.png';
import image_9 from '../../../images/image_9.png';





function Minislider() {
  return (
    <div className='mini-list'>
      <div class="slick-list">
	<div className='mini-img-1'><img src={image_1} alt='image-1' width='100%'/><h3>Drinks</h3> </div>
	<div className='mini-img-2'><img src={image_2} alt='image-2' width='100%'/><h3>Drinks</h3></div>
    <div className='mini-img-3'><img src={image_3} alt='image-3' width='100%'/><h3>Snacks</h3></div>
	<div className='mini-img-4'><img src={image_4} alt='image-4' width='100%'/><h3>Fruits</h3></div>
	<div className='mini-img-5'><img src={image_5} alt='image-5' width='100%'/><h3>Fruits</h3></div>
	<div className='mini-img-7'><img src={image_7} alt='image-7' width='100%'/><h3>Fruits</h3></div>
	<div className='mini-img-8'><img src={image_8} alt='image-8' width='100%'/><h3>Snacks</h3></div>
	<div className='mini-img-9'><img src={image_9} alt='image-9' width='100%'/><h3>Drinks</h3></div>
	
	
	
</div>

    </div>
    
  )
}

export default Minislider
