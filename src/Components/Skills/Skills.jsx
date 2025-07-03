import React from "react";

const Skills = () => {
  const skills = [
    { name: "React.js", level: 90, color: "primary" },
    { name: "JavaScript", level: 95, color: "warning" },
    { name: "Node.js", level: 85, color: "success" },
    { name: "Python", level: 80, color: "info" },
    { name: "MongoDB", level: 75, color: "secondary" },
    { name: "Bootstrap", level: 90, color: "primary" },
    { name: "Git & GitHub", level: 85, color: "dark" },
    { name: "AWS", level: 70, color: "warning" },
  ];

  const tools = ["VS Code", "Figma", "Postman", "Docker", "Webpack", "Vite"];

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="display-5 fw-bold">Skills & Technologies</h2>
            <p className="lead text-muted">
              My technical expertise and proficiency levels
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <h4 className="mb-4">Technical Skills</h4>
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span className="fw-semibold">{skill.name}</span>
                  <span className="text-muted">{skill.level}%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div
                    className={`progress-bar bg-${skill.color}`}
                    role="progressbar"
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-4">
            <h4 className="mb-4">Tools & Software</h4>
            <div className="row">
              {tools.map((tool, index) => (
                <div key={index} className="col-6 mb-3">
                  <div className="card text-center h-100 border-0 bg-light">
                    <div className="card-body py-3">
                      <small className="fw-semibold">{tool}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
