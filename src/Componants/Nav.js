import { Link } from "react-router-dom";
import { useState } from "react";



export default function Nav(){


    const [isXVisible, setIsXVisible] = useState(false);

    const handleYClick = () => {
        setIsXVisible(true); 
    };

    const handleZClick = () => {
        setIsXVisible(false); 
    };

    

    return(
        <div className="container">

        <div className="nav_container">
    <div className="admin">M A</div>
    <div className="nav_ul">
    <ul className="links">
    <Link to="/"><li className="active">Home</li></Link>
    <Link to="/about us"><li>About Us</li></Link>
    <Link to="/contact"><li>Contact</li></Link>
    </ul>
    </div>

        <div className="change_colors_div">
            <p className="change_colors_dark">Dark /</p>
            <p className="change_colors_light">Light</p>
            <i class="fa-regular fa-sun"></i>
            </div>

    <div onClick={handleYClick} class="bars_container">
    <i class="fa-solid fa-bars-staggered"></i>
</div>


        </div>
        <div  style={{display:isXVisible?"block":"none"}} className="bars_div_parent">
        <div style={{display:isXVisible?"block":"none"}} className="bars_div">
    <div className="bars_name">
        <div className="title">Mohammad Adel</div>
        <hr className="hr"/>
        <div onClick={handleZClick}><i class="fa-solid fa-xmark"></i></div>
    </div>
<ul>
<Link to="/"><div>
    <li>Home</li></div></Link>
    <Link to="/about us"><div>
    <li>About</li></div></Link>
    <Link to="/projects"><div>
    <li>Projects</li></div></Link>
    <Link to="/contact"><div>
    <li>Contact</li></div></Link>
    <div className="change_colors_div_in_bars_div">
            <p className="change_colors_div_in_bars_div_dark">Dark /</p>
            <p className="change_colors_div_in_bars_div_light">Light</p>
            <i class="fa-regular fa-sun"></i>
            </div>
</ul>

<hr className="hr"/>

<div>
    <h2>
        Follow Me:
    </h2>

    <div className="my_container_social2">
            <Link to="/"><li><i class="fa-brands fa-facebook-f"></i></li></Link>
            <Link to="/"><li><i class="fa-brands fa-instagram"></i></li></Link>
            <Link to="/"><li><i class="fa-brands fa-linkedin-in"></i></li></Link>
            <Link to="/"><li><i class="fa-brands fa-x-twitter"></i></li></Link>
        </div>
</div>

</div>
</div>
        </div>
    );
    }