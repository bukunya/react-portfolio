import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Website Portfolio",
      description:
        "Sebuah website portfolio untuk menampilkan deskripsi diri, pengalaman, proyek, dan kontak",
      image: "/this-page.png",
      technologies: ["React", "Bootstrap", "Vite"],
      liveLink: "",
      githubLink: "",
    },
    {
      id: 2,
      title: "Website Laporan Keuangan",
      description:
        "Website untuk memanajemen keuangan, mencatat transaksi berdasarkan akun, dan menciptakan laporan keuangan",
      image: "/lapkeu.png",
      technologies: ["PHP", "MySQL", "Bootstrap"],
      liveLink: "https://lapkeu.trpl24.space",
      githubLink: "https://github.com/bukunya/lapKeu-webApp",
    },
    {
      id: 3,
      title: "Fireboy and Watergirl Remake",
      description:
        "Remake dari game Fireboy and Watergirl dengan menggunakan Bahasa Pemrograman Java",
      image: "/fireboy.png",
      technologies: ["Java"],
      liveLink: "",
      githubLink: "https://github.com/bukunya/final-project-ppbo",
    },
  ];

  return (
    <section id="projects" className="py-5 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="display-5 fw-bold text-primary">Proyek</h2>
            <p className="lead text-muted">Beberapa karya yang sudah selesai</p>
          </div>
        </div>

        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text text-muted flex-grow-1">
                    {project.description}
                  </p>
                  <div className="mb-3">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="badge bg-primary me-1 mb-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex gap-2">
                    <a
                      href={project.liveLink}
                      className={`btn btn-primary btn-sm flex-fill ${
                        project.liveLink ? "" : "disabled"
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      className={`btn btn-outline-dark btn-sm flex-fill ${
                        project.githubLink ? "" : "disabled"
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
