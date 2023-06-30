import "./css/style.css";
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import SkillsOverview from './components/SkillsOverview';

function App() {
  return (
    <div style={{minHeight: "100vh"}} className='d-flex flex-column justify-content-around bg-dark'>
      <Navbar />
      <Intro />
      <SkillsOverview />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;
