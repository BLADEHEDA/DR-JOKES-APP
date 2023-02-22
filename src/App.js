import './App.css';
import JokesDay from './Component/JokesDay';
import Mainbar from './Component/Mainbar';
import Navbar from './Component/Navbar/Navbar';
import JokesCategory from './Component/JokesCategory';
import Testimonial from './Component/Testimonial';
import Footer from './Component/Footer';
// import Carousel from 'nuka-carousel/lib/carousel';
import Carousel from './Component/Carousel';
// import FormModal from './Component/Navbar/FormModal';


function App() {

  return (
  
    <section >
      <section className="App"> 
      <Navbar/>
      <Mainbar/>
      <div className="desktop"><JokesDay/></div>
       <div className="mobil md:hidden"><Carousel  />  </div>
      <JokesCategory/>
      <Testimonial/>
      </section>
      <Footer/>

    </section>
  );
}

export default App;
