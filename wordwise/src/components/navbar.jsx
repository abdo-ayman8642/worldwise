import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <li>
        <NavLink to={"/"}>Home page</NavLink>
      </li>
      <li>
        <NavLink to={"product"}>Product</NavLink>
      </li>
      <li>
        <NavLink to={"pricing"}>Pricing</NavLink>
      </li>
    </ul>
  );
};
export default Navbar;
