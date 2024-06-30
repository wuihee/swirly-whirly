import { useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  let [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav>
      <button onClick={toggleMenu}>click</button>
      {isOpen && <Menu />}
    </nav>
  );
}

function Menu() {
  return (
    <ul>
      <li>
        <a href="">About</a>
      </li>
      <li>
        <a href="">Proudcts</a>
      </li>
      <li>
        <a href="">Contact</a>
      </li>
    </ul>
  );
}
