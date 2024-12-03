import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Portfolio from './components/Portfolio';
import { Education } from './components/education';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Portfolio/>
      <Education/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
