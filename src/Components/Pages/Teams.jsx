import { motion } from "framer-motion";
import bannerImage from "../../assets/AZ.jpg";
function Teams() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="home w-full h-screen"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      Teams
    </motion.div>
  );
}

export default Teams;
