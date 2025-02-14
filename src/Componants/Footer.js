import { Link } from "react-router-dom";
export default function Footer(){
    return(
        <div className="container">
        
        <hr className="hr"/>

<div className="footer_container">

            <div className="footer_contact">
            <Link to="https://www.facebook.com/profile.php?id=100049698701223&mibextid=ZbWKwL"><li><i class="fa-brands fa-facebook-f"></i></li></Link>
            <Link to="https://www.instagram.com/mohamed_adel_04?igsh=bjF6ZWxsYmNzYnd6"><li><i class="fa-brands fa-instagram"></i></li></Link>
            <Link to="https://www.linkedin.com/in/mohamed-adel-1330a9320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><li><i class="fa-brands fa-linkedin-in"></i></li></Link>
            <li><i class="fa-brands fa-x-twitter"></i></li>
        </div>

            <div className="copy_right_p">
            <p><i class="fa-regular fa-copyright"></i></p>
            <p> All Rights Reserved.Made By <span style={{fontWeight:"bold"}}>Mohammad Adel.</span> </p>
            </div>
            </div>

        </div>
    );
    }