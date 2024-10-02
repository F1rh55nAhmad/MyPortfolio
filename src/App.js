import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/footer'; 
import About from './components/About';
//import Skills from './components/skills';
import Projects from './components/projects';
import Services from './components/services';
import Contact from './components/contact';
import ProjectDetails from './components/projectdetails';// Import your new ProjectDetails component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Skills from './components/skills';

function App() {
  return (
    <Router>
      <div>
      <Header />
        
        {/* Default route to show all main sections */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Services />
                <Contact />
              </>
            }
          />
          {/* Route for project details */}
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
