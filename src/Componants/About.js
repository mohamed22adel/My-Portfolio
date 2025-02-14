import { Link } from "react-router-dom";
export default function About(){
    return(
        <div className="container">
        
        <div className="about_container">

<div className="my_container">
        <img src={require("../images/profile_photo.jpg")} alt="i"/>
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

        <button className="my_container_btn2">
        Download CV
        </button>
    </div>


    
    <div className="about_container_div1">
        
            <img src={require("../images/profile_photo.jpg")} alt="i"/>
            <div>
                <h1>
                    ABOUT ME<span>!</span>
                </h1>
                <p className="about_container_paragraph">Hello! I'm Mohammad Adel a passionate Front End based in Ismailia. 
                    I've spent the 5 years honing my skills in Specific React.js. 
                    My journey began with a deep love for Related, 
                    which naturally evolved into a career in Front-End.
                </p>
                <div style={{display:"flex",textAlign:"center"}}>

                <div style={{margin:"5px 20px"}}>
                <h2>10+</h2>
                <p style={{color:"#888888"}}>projects completed</p>
                </div>
                <div style={{margin:"5px 20px"}}>
                <h2>15+</h2>
                <p style={{color:"#888888"}}>satisfied clients</p>
                </div>

                </div>
            </div>
    </div>

</div>

<div className="about_container_div2">

<div>
    <h1>
        EXPERIENCE
    </h1>
    <p>2020 - 2025</p>
    <p>Front End Developer</p>
    <p>2024 - 2025</p>
    <p>React.js Developer</p>
</div>


<div>
    <h1>
        EDUCATION
    </h1>
    <p>2023 - 2027</p>
    <p>Computer Science</p>
    <p>Faculty Of Computer And Information</p>
</div>

</div>

<div className="progress-bar">
                <div className="label">EXCHANGE</div>
                <p className="sklle_name">html <p className="persent">80%</p></p>
                <div className="bar"><div className="in_bar1"></div></div>
                <p className="sklle_name">css <p className="persent">85%</p></p>
                <div className="bar"><div className="in_bar2"></div></div>
                <p className="sklle_name">JavaScript <p className="persent">75%</p></p>
                <div className="bar"><div className="in_bar3"></div></div>
                <p className="sklle_name">bootstrap <p className="persent">80%</p></p>
                <div className="bar"><div className="in_bar4"></div></div>
                <p className="sklle_name">tailwindCSS <p className="persent">70%</p></p>
                <div className="bar"><div className="in_bar5"></div></div>
                <p className="sklle_name">react.js <p className="persent">90%</p></p>
                <div className="bar"><div className="in_bar6"></div></div>
            </div>

        </div>
    );
}