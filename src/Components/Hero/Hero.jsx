import React from "react";
import styles from "./HeroStyles.module.css";
import heroimg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinlight from "../../assets/linkedin-light.svg";
import linkedindark from "../../assets/linkedin-dark.svg";
import githublight from "../../assets/github-light.svg";
import githubdark from "../../assets/github-dark.svg";
import { useTheme } from "../../common/ThemeContext";

export default function Hero() {
  const { theme, toggleTheme } = useTheme();
  const linkedinlogo = theme === "light" ? linkedinlight : linkedindark;
  const Githublogo = theme === "light" ? githublight : githubdark;
  const Themeicon = theme === "light" ? sun : moon;
  return (
    <>
      <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
          <img
            className="colorMode"
            src={Themeicon}
            alt="Color mode Icon"
            onClick={toggleTheme}
          ></img>
          <img
            className={styles.hero}
            src={heroimg}
            alt="Profile-picture of Naveen Reddy"
          />
        </div>

        <div className={styles.info}>
          <h1>
            Naveen <br /> Reddy
          </h1>
          <h2>Full Stack Developer</h2>
          <span>
            <a
              href="https://www.linkedin.com/in/naveenkumarreddybadduri"
              target="_blank"
            >
              <img src={linkedinlogo}></img>
            </a>
            <a href="https://github.com/Naveenreddy7571" target="_blank">
              <img src={Githublogo}></img>
            </a>
          </span>
          <p className={styles.description}>
            Hey there! I'm Naveen, Welcome to my portfolio!
          </p>
          <a
            href="https://drive.google.com/file/d/17PaTlnfd5PQMPcuIscHqOl5rTYgu6G-c/view?usp=sharing"
            download
          >
            <button className="hover">Resume</button>
          </a>
        </div>
      </section>
    </>
  );
}
