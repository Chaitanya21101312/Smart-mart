
import './App.css';
import Home from './pages/Home/Home';
import './Home.css';
import Checkout from './Checkout';
import Product from './pages/Product';
import Contact from './Contact';
 import { Routes,Route } from 'react-router-dom';

 


 


function App() {
  return (
    <div className="App">

     
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      

    </div>
  );
}

export default App;
