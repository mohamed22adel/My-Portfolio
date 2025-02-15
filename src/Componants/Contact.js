import { Link } from "react-router-dom";
export default function Contact(){

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '../Mohammed_Adel_CV.pdf'; 
        link.download = "../Mohammed_Adel_CV.pdf";
        link.click();
        };
    

    return(
        <div className="container">
        <div className="form_container">


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



<form className="contact_form">

        <div className="contact_form_paragraph">
            <h1>LET'S CHAT<span>!</span></h1>
        </div>

        <div className="contact_form_name_and_email">
            <input className="name" type="text"  placeholder=" Enter Your Name"/>
            <input className="number" type="text"  placeholder=" Enter Your Number"/>
        </div>

        <div>
            <input className="email" type="email" placeholder=" Enter Your Email"/>
        </div>

        <div>
            <input className="message" type="textarea"  placeholder=" Enter Your Message"/>
        </div>

            <button className="send" type="submit">Send</button>

        </form>

        </div>


        <div className="contact_request">
                <div className="contact_request_paragraph">
                    <h3>REQUEST A QUOTE FOR WORK</h3>
                </div>

                <div className="contact_request_div">

                    <div>
                        <p>
                            Phone Number
                        </p>
                        <h3>
                            +20 1125805081
                        </h3>
                    </div>

                    <div>
                        <p>
                            Office Address
                        </p>
                        <h3>
                            Egypt , Ismailia
                        </h3>
                    </div>

                    <div>
                    <p>
                        Email Address
                    </p>
                    <h3>
                        mohamed22adel224@gmail.com
                    </h3>
                    </div>

                </div>
                
        </div>


        </div>
    );
}