import React, { useState } from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import groot from "../../assets/Projects/grootProject.jpg";
import proj_2 from "../../assets/proj_1.png";
import secondbrain from "../../assets/Projects/secondbrain.jpg";
import styles from "./Projectstyles.module.css";

export default function Project() {
  const projectsarr = [
    {
      link: "https://www.npmjs.com/package/groot-vcs",
      photo: groot,
      title: "Groot",
      description:
        "Groot is a custom version control system where you can commit files, push files, view commit logs and diffs, and more. Published on npm.",
    },
    {
      link: "#",
      photo: proj_2,
      title: "Agri Connect",
      description:
        "AgriConnect is an innovative platform designed to bridge the gap between farmers and agricultural markets. Built using React, Spring Boot, and MySQL for a robust and user-friendly experience.",
    },
    {
      link: "#",
      photo: secondbrain,
      title: "Second Brain",
      description:
        "Second Brain is a centralized knowledge management platform that empowers users to organize and manage content from multiple sources like Twitter, YouTube, and Google Docs. Built with React.js for a responsive frontend, Express.js and Node.js for a secure and efficient backend, and MongoDB for robust data management. It features JWT-based authentication, password hashing for security, and an intuitive user interface designed with Tailwind CSS. This project simplifies content aggregation and enhances productivity for individuals and teams.",
    },
  ];

  const [expanded, setExpanded] = useState({});

  const toggleExpanded = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="projects" className={styles.container}>
      <Typography variant="h4" className="sectionTitle" sx={{ fontWeight: "bold", marginBottom: "2rem" }}>
        Projects
      </Typography>

      {/* Project Cards Container */}
      <div className={styles.projectsContainer}>
        {projectsarr.map((project, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 345,
              boxShadow: 3,
              borderRadius: 4,
              textAlign: "center",
              transition: "transform 200ms ease-in-out",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            {/* Project Image */}
            <CardMedia
              component="img"
              height="150"
              image={project.photo}
              alt={project.title}
              sx={{
                backgroundColor: "var(--project-card-bg)",
                borderRadius: "20px",
                margin: "1rem auto 0",
                width: "250px",
                maxWidth: "250px",
              }}
            />
            {/* Card Content */}
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: "bold" }}>
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ maxHeight: expanded[index] ? "none" : 80, overflow: "hidden" }}>
                {expanded[index]
                  ? project.description
                  : `${project.description.slice(0, 100)}${project.description.length > 100 ? "..." : ""}`}
              </Typography>
              <Button
                size="small"
                onClick={() => toggleExpanded(index)}
                sx={{ textTransform: "none", marginTop: "0.5rem" }}
              >
                {expanded[index] ? "View Less" : "View More"}
              </Button>
            </CardContent>
            {/* Card Actions */}
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                size="small"
                color="primary"
                href={project.link}
                target="_blank"
                rel="noopener"
                variant="contained"
                sx={{ textTransform: "none" }}
              >
                Direct Link
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </section>
  );
}
