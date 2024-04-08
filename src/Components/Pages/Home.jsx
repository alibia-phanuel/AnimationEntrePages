import { Link } from "react-router-dom";
import bannerImage from "../../assets/rover.webp";
import { motion } from "framer-motion";
function Home() {
  return (
    <motion.div
      className=" w-full h-screen"
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
          <button>ORDER NOW</button>
        </Link>
      </div>
    </motion.div>
  );
}

export default Home;
