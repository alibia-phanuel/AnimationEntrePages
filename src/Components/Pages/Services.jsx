import { motion } from "framer-motion";
import bannerImage from "../../assets/pp.png";
function Services() {
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
      Services
    </motion.div>
  );
}

export default Services;
