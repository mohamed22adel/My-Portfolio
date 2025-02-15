import { Link } from "react-router-dom";

const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../Mohammed_Adel_CV.pdf'; 
    link.download = "../Mohammed_Adel_CV.pdf";
    link.click();
    };


export default function Project(){
    return(
        <div className="container">
    <div className="projects_container">

    <div className="my_container">
        <img src={require("../images/my_photo2.jpg")} alt="i"/>
        <div className="my_container_jop">
            <h2>HY! I'M <span>MOHAMMAD ADEL</span></h2>
            <p>Front-End Developer</p>
        </div>
        
        <div className="my_container_email">
            <p className="p1">mohamed22adel224@gmail.com</p>
            <p className="p2">+20 1125805081</p>
        </div>
        
        <div className="my_container_social">
        <Link to="https://www.facebook.com/profile.php?id=100049698701223&mibextid=ZbWKwL"><li><i class="fa-brands fa-facebook-f"></i></li></Link>
            <Link to="https://www.instagram.com/mohamed_adel_04?igsh=bjF6ZWxsYmNzYnd6"><li><i class="fa-brands fa-instagram"></i></li></Link>
            <Link to="https://www.linkedin.com/in/mohamed-adel-1330a9320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><li><i class="fa-brands fa-linkedin-in"></i></li></Link>
            <Link to="/"><li><i class="fa-brands fa-x-twitter"></i></li></Link>
        </div>

        <Link to="/hire me"><button className="my_container_btn">
            Hire Me!
        </button></Link>

        <button onClick={handleDownload} className="my_container_btn2">
        Download CV
        </button>
    </div>
        
        <div className="project_container_div">
            <div className="project_container_div_paragraph">
            <h1>Featured Projects<span>!</span></h1>
        <p>Featured and popular products are the best-selling items for your product, 
            product range, or company. However, 
            a featured product could be a new product line or seasonal products instead.</p>
            </div>
        
        <div className="project_container_div1">
            <div>
                <img src={require("../images/Gym_web.png")} alt="i"/>
                <p>Online Gym Web</p>
                <h2>Responsive Online Gym Web</h2>
            </div>

            <div>
                <img src={require("../images/courses_web.png")} alt="i"/>
                <p>Online Courses Platform</p>
                <h2>Responsive Online Courses Platform</h2>
            </div>
        </div>

        <div className="project_container_div1">
            <div>
                <img src={require("../images/Hotel_web.png")} alt="i"/>
                <p>Booking Hotel</p>
                <h2>Responsive Booking Hotel Website</h2>
            </div>

            <div>
                <img src={require("../images/download.jpg")} alt="i"/>
                <p>Mobile App Design</p>
                <h2>Mobile Application Landing Page Design</h2>
            </div>
        </div>

        <div className="project_container_div1">
            <div>
                <img src={require("../images/download.jpg")} alt="i"/>
                <p>Mobile App Design</p>
                <h2>Mobile Application Landing Page Design</h2>
            </div>

            <div>
                <img src={require("../images/download.jpg")} alt="i"/>
                <p>Mobile App Design</p>
                <h2>Mobile Application Landing Page Design</h2>
            </div>
        </div>

        <div className="project_container_div_ul">
            <ul>
                <Link to="/"><li className="active2">1</li></Link>
                <Link to="/"><li>2</li></Link>
                <Link to="/"><li>3</li></Link>
                <Link to="/"><li>4</li></Link>
            </ul>
        </div>

        </div>
        
        
        </div>
        </div>
    );
}
/*<button className="repo_btn">Repo</button>
                        <button className="demo_btn">Live Demo</button>*/ 