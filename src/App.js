import './App.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function App() {
  const newicon = <FontAwesomeIcon icon="fa-solid fa-mug-saucer" />
  const element = <FontAwesomeIcon icon={faCoffee} />
  return (
    <section className="App">
      <h1>you are a baddass</h1>
      <h1> { element } </h1>
      <h1> {newicon} </h1>
    </section>
  );
}

export default App;
