
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Projects from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import {Routes , Route} from "react-router-dom";
export default function Portpholio() {


    return(
<div>
<Nav/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about us" element={<About/>}/>
<Route path="/projects" element={<Projects/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/hire me" element={<Contact/>}/>
</Routes>
<Footer/>
</div>
    );
}