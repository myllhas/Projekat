import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/skj.jpg";
const About = () => {
  return (
    <section className="about">
      {" "}
      <main>
        <h1>About Us</h1>
        <article>
          <h4>Milos' Burger Shop</h4>{" "}
          <p>
            This is Milos' Burger Shop. The place for most tasty burgers this
            side of Milky Way!{" "}
          </p>
          <p>Checkout our Burgers and eat only the best.</p>
          <Link to="/">
            {" "}
            <RiFindReplaceLine />
          </Link>{" "}
        </article>
        <div>
          {" "}
          <h2>Founder</h2>{" "}
          <article>
            <div>
              <img src={me} alt="Founder" /> <h3>Milos</h3>
            </div>
            <p>I am Milos, founder and CEO of Milos' Burgers</p>{" "}
          </article>
        </div>{" "}
      </main>
    </section>
  );
};
export default About;
