import './App.css';
import JokesDay from './Component/JokesDay';
import Mainbar from './Component/Mainbar';
import Navbar from './Component/Navbar/Navbar';
import JokesCategory from './Component/JokesCategory';
import Testimonial from './Component/Testimonial';

function App() {

  return (
    <section className="App">
      <Navbar/>
      <Mainbar/>
      <JokesDay/>
      <JokesCategory/>
      <Testimonial/>

    </section>
  );
}

export default App;
