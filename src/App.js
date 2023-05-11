import logo from './logo.svg';
import './App.css';
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';

function App() {
  return (
    <div style={{minHeight: "100vh"}} className='d-flex flex-column justify-content-around bg-dark'>
      <Navbar />
      <Intro />
      <Projects />
      <ContactForm />
      
    </div>
  );
}

export default App;
