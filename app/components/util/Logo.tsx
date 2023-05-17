import { NavLink } from "@remix-run/react";

function Logo() {
  return (
    <h1 id="logo">
      <NavLink to="/">RemixExpenses</NavLink>
    </h1>
  );
}

export default Logo;
