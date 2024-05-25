import React from "react";
import styles from "./SkillsStyles.module.css";
import checkMarkIcondark from "../../assets/checkmark-dark.svg";
import checkMarkIconlight from "../../assets/checkmark-light.svg";
import { useTheme } from "../../common/ThemeContext";

export default function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconlight : checkMarkIcondark;

  const webSkills = ["HTML", "CSS", "JavaScript", "React", "SpringBoot", "Spring", "Hibernate"];
  const programmingSkills = ["Python", "Java"];
  const devopsSkills = ["Docker", "Kubernetes", "CI/CD"];

  const renderSkills = (skills) => {
    return skills.map((skill, idx) => (
      <div key={idx} className={styles.skillItem}>
        <img src={checkMarkIcon} alt="Checkmark" />
        <p>{skill}</p>
      </div>
    ));
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.sectionTitle}>Skills</h1>
      <hr />
      <h2>Web Technologies</h2>
      <div className={styles.skillsList}>
        {renderSkills(webSkills)}
      </div>
      <hr />
      <h2>Programming Languages</h2>
      <div className={styles.skillsList}>
        {renderSkills(programmingSkills)}
      </div>
      <hr />
      <h2>DevOps</h2>
      <div className={styles.skillsList}>
        {renderSkills(devopsSkills)}
      </div>
    </section>
  );
}
