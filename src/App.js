import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Banner from './components/Banner';
import Feature from './components/Feature';
import Offer from './components/Offer';
import Gallery from './components/Gallery';
import Process from './components/Process';
import About from './components/About';
import News from './components/News';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Feature/>
      <Offer/>
      <Gallery/>
      <Process/>
      <About/>
      <News/>
      <Footer/>
      <Home/>
    </div>
  );
}

export default App;
