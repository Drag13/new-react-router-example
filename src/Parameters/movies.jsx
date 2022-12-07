import { NavLink } from "react-router-dom";

export const Movies = () => {
  return (
    <ul>
      <li>
        <NavLink to="/movie/1">Lord of the Rings</NavLink>
      </li>
      <li>
        <NavLink to="/movie/1">Matrix</NavLink>
      </li>
      <li>
        <NavLink to="/movie/1">5th element</NavLink>
      </li>
    </ul>
  );
};
