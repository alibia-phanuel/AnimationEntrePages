import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

import AnimatedRoute from "./Components/AnimatedRoute";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="flex flex-col justify-between items-center">
      <Router>
        <NavBar />
        <AnimatedRoute />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
