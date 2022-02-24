//import logo from './logo.svg';
import background from './background.png';
import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header/Header'
import AboutUs from './components/AboutUsSection/AboutUsSection'
import Why from './components/WhySection/Why'
import NotifyMe from './components/NotifyMe/NotifyMe'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App"> 
    <div style={{backgroundImage: 'url(' + background + ')',
                backgroundPosition: 'center center', backgroundSize: 'cover' ,backgroundRepeat:'no-repeat'}}>
  
      <Navbar /> 
      <Header /> </div>
      <AboutUs />  
      <Why /> 
      <NotifyMe /> 
      <Footer /> 
    </div>
    
  );
}

export default App;
