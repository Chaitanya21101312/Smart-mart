import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../../images/slider1.png';
import slider2 from '../../../images/slider2.png';

function Slider() {
  return (
    <div className='slider-container'>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src={slider1} alt='slider-1'/>
        <Carousel.Caption className='caption'>
          <p>Get up to 30% off on your first $150 purchase</p>
          <h2>Do not miss our amazing <br/> grocery deals</h2>
          <button>Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
       <img src={slider2} alt='slider-2'/>
        <Carousel.Caption className='caption'>
          <p>Get up to 30% off on your first $150 purchase</p>
          <h2>Do not miss our amazing <br/> grocery deals</h2>
          <button>Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slider1} alt='slider-3'/>
        <Carousel.Caption className='caption'>
          <p>Get up to 30% off on your first $150 purchase</p>
          <h2>Do not miss our amazing <br/> grocery deals</h2>
          <button>Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </div>
  );
}

export default Slider;