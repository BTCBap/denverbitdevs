import React from "react";
import DonateButton from "./DonateButton.jsx";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/events">Events</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <DonateButton />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
