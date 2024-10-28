// create links that allow users to navigate to different categories of celestial objects
import { NavLink, Outlet } from "react-router-dom";
import NavigateBackButton from "../components/NavigateBackButton";

const NavBar = ({ data }) => {
  return (
    <div>
      <header>
        <nav className="display-flex items-center justify-between h-20 mb-10 border-solid border-x-2 border-y-2">
          <NavLink className="my-0 mx-5" to="/">
            Home
          </NavLink>
          {data.map((dataElement) => (
            <NavLink
              className="my-0 mx-5"
              key={dataElement.id}
              to={`/content/${dataElement.id}`}
            >
              {dataElement.title}
            </NavLink>
          ))}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>

      <NavigateBackButton />
    </div>
  );
};

export default NavBar;
