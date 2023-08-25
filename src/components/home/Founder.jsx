import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/skj.jpg";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Milos</h3>

        <p>
          Hello there! I'm Milos, founder and CEO of the greatest Burger joint
          this side of Milky Way!
          <br />
          Only the best burgers are served here!
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
