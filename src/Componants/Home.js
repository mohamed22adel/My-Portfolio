import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
export default function Home(){





    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    
    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    

    const { ref: ref3, inView: inView3 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    
    const { ref: ref4, inView: inView4 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });



    const variant1 = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -50 },
    };
    
    const variant2 = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -50 },
    };

    const variant3 = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
    };
    
    const variant4 = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 50 },
    };



return(
    <div className="container">
        <div className="home_container">

        <div ref={ref1} className="my_container">
        <motion.div
        initial="hidden"
        animate={inView1 ? 'visible' : 'hidden'}
        variants={variant1}
        transition={{ duration: 0.6 }}>
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
        </motion.div>
    </div>

        <div ref={ref2} className="home_paragraph_container">
        <motion.div
        initial="hidden"
        animate={inView2 ? 'visible' : 'hidden'}
        variants={variant2}
        transition={{ duration: 0.6 }}>
    <p className="hi">Hey,I'm Mohammad</p>
    <p className="my_jop"><span className="full">Front-</span>End</p>
        <p className="my_jop">Developer</p>
        <p className="paragraph">I'm Mohammad,I'm a Computer science student,Full-stack developer skilled in</p>
        <p className="paragraph2">HTML, CSS, JavaScript, React.js,..........</p>
        <p className="paragraph3">my experience makes me make a wonderful projects.</p>
        </motion.div>
        </div>

    </div>

<div className="home_cards_div">
<motion.div
        initial="hidden"
        animate={inView3 ? 'visible' : 'hidden'}
        variants={variant3}
        transition={{ duration: 0.6 }}>
<div ref={ref3} className="home_cards_div1">
    <div className="about_me_card">
        <h1>Mohammad Adel</h1>
        <p>More Specialized</p>
        <Link to="/about us"><h4>ABOUT US</h4></Link>
    </div>

    <div className="amount_project_and_experience_card">
        <div>
                <h1>5</h1>
                <p>Years of experience</p>
        </div>
        <div>
        <h1>10+</h1>
        <p>Projects Completed</p>
        </div>
    </div>
    </div>
    </motion.div>

    <div className="home_cards_div2">
    <motion.div
        initial="hidden"
        animate={inView4 ? 'visible' : 'hidden'}
        variants={variant4}
        transition={{ duration: 0.6 }}>
            <div ref={ref4} className="project_card">
                    <div className="project_card_images">
                        <img src={require("../images/Gym_web.png")} alt="i"/>
                        <img src={require("../images/courses_web.png")} alt="i"/>
                    </div>
                    <div className="project_card_paragraph">
                        <p>Showcase View</p>
                        <Link to="/projects"><h4>PROJECTS</h4></Link>
                    </div>
            </div>
            

            <div className="contact_card">
                    <p>Let's Work</p>
                    <Link to="/contact"><h4>CONTACT</h4></Link>
            </div>
            </motion.div>
    </div>
    </div>

    </div>
);
}