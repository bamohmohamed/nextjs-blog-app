import Image from "next/image";
import classes from "./hero.module.css";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/mo.png"
          alt="Mo Image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi! I am Mo</h1>
      <p>
        I am a Solutions Architect, Consultant and Software Developer that has a
        particular interest in all things related to cutting-edge technologies.
      </p>
    </section>
  );
}
export default Hero;
