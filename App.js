import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import  Hero from './components/Hero';
import Sell from './components/Sell';
import Products from './components/Products';
import Calculation from './components/Calculation';
import Footer from './components/Footer';


function App() {
  return (
    <div >
      
      <Navbar/>
      <Hero/>
      <Sell/>
      <Products/>
      <Calculation/>
      <Footer/>
    
    </div>
  );
}

export default App;
