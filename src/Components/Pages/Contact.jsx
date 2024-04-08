import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bannerImage from "../../assets/pp.png";
function Contact() {
  return (
    <motion.div
      className="home w-full h-screen"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundRepeat: "no-repeat",
      }}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="headerContainer">
        <h1> Perdro Pizzeria</h1>
        <p>Pizza to fit any taste</p>
        <Link to="/menu">
          <button>Contact</button>
        </Link>
      </div>
    </motion.div>
  );
}

export default Contact;
