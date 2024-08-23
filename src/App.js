import Navbar from "./Components/Navbar.js"; 
import Home from "./Components/Home.js"; 
import About from "./Components/About.js"; 
import Projects from "./Components/Projects.js";
import People from "./Components/People.js"; 
import Footer from "./Components/Footer.js"; 
import Gallery from "./Components/Gallery.js"; 
import Sponsors from "./Components/Sponsors.js";
import Contact from "./Components/Contact.js";

import BlogNavbar from "./Components/BlogNavbar.js";
import BlogHeader from "./Components/BlogHeader.js";

import EntryNavbar from "./Components/EntryNavbar.js";
import Entry1 from "./Components/BlogComponents/Entry1.js";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>

      <Routes>
        <Route exact path="/" element=
        {
          <div>
            <Navbar></Navbar>
            <Home></Home>
            <About></About>
            <Projects></Projects>
            <People></People>
            <Gallery></Gallery>
            <Sponsors></Sponsors>
            <Contact></Contact>
          </div>
        } 
        />

        
        <Route exact path="/blog" element=
        {
          <div>
            <BlogNavbar></BlogNavbar>
            <BlogHeader></BlogHeader>
          </div>
        }
        />

        <Route exact path="/blog/entry1" element = {
          <div>
            <EntryNavbar></EntryNavbar>
            <Entry1></Entry1>
          </div>
        }
        >
        </Route>
      </Routes>


      <Footer></Footer>
    </HashRouter>
  );
}

export default App; 
