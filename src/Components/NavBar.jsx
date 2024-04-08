import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="w-full bg-red-400 flex justify-center items-center">
      <div className="container bg-yellow-300 flex justify-between">
        <div className="text-[30px] font-bold  uppercase">Logo</div>
        <nav className="flex justify-center items-center">
          <ul className="flex  justify-center items-center gap-10 capitalize text-[20px]">
            <Link to="/">
              {" "}
              <li>home</li>
            </Link>

            <Link to="/Teams">
              {" "}
              <li>Teams</li>
            </Link>

            <Link to="/Service">
              {" "}
              <li>Service</li>
            </Link>

            <Link to="/Contact">
              {" "}
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
