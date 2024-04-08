import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Teams from "./Pages/Teams";
import Contact from "./Pages/Contact";
import { AnimatePresence } from "framer-motion";
function AnimatedRoute() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Services />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoute;
