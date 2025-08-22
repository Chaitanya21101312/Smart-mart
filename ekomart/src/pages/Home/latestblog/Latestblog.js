import React from 'react'
import "../../Home/latestblog/latestblog.css" 
import blog1 from'../../../images/blog1.jpeg'
import blog2 from'../../../images/blog2.jpeg'
import blog3 from'../../../images/blog3.jpeg'
import blog4 from'../../../images/blog4.jpeg'
function Latestblog() {
  return (
   
    <div className='blog-container'>
        <div className='blog-heading'>
      <h2>Latest Blog Post Insights
      </h2>
      </div>
<div className='blog-card1'>
    <img src={blog1} alt='blog'/>
    <h3>Shion Fixation: Fueling Your Passion for All Things Stylish</h3>
<h4><i className="fas fa-plus"></i>&nbsp; &nbsp;Read Deatils</h4>
</div>


<div className='blog-card2'>
    <img src={blog2} alt='blog'/>
    <h3>Shion Fixation: Fueling Your Passion for All Things Stylish</h3>
<h4><i className="fas fa-plus"></i>&nbsp; &nbsp;Read Deatils</h4>
</div>


<div className='blog-card3'>
    <img src={blog3} alt='blog'/>
    <h3>Shion Fixation: Fueling Your Passion for All Things Stylish</h3>
<h4><i className="fas fa-plus"></i>&nbsp; &nbsp;Read Deatils</h4>
</div>

<div className='blog-card4'>
    <img src={blog4} alt='blog'/>
    <h3>Shion Fixation: Fueling Your Passion for All Things Stylish</h3>
<h4><i className="fas fa-plus"></i>&nbsp; &nbsp;Read Deatils</h4>
</div>



    </div>
  )
}

export default Latestblog
