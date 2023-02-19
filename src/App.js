import './App.css';
import JokesDay from './Component/JokesDay';
import Mainbar from './Component/Mainbar';
import Navbar from './Component/Navbar/Navbar';
import JokesCategory from './Component/JokesCategory';
import Testimonial from './Component/Testimonial';
import Footer from './Component/Footer';
import Modal from './Component/Modal/Modal';

function App() {

  return (
  
    <section >
      <section className="App"> 
      <Navbar/>
      <Mainbar/>
      <JokesDay/>
      <JokesCategory/>
      {/* <Modal/> */}
      <Testimonial/>
      </section>
      <Footer/>

    </section>
  );
}

export default App;
