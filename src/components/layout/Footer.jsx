import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      {" "}
      <div>
        <h2>Milos' Burger Shop</h2>
        <p>We give you the burger you deserve.</p> <br />
        <em>We give attention to all feedback.</em>
        <strong>All right received @Milos' Burger shop</strong>{" "}
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="https://youtube.com/xyz">
          {" "}
          <AiFillYoutube />
        </a>
        <a href="https://instagram.com/xyz">
          <AiFillInstagram />{" "}
        </a>
      </aside>{" "}
    </footer>
  );
};
export default Footer;
