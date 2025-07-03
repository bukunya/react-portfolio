import React from "react";

const About = () => {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="display-5 fw-bold text-primary">About Me</h2>
            <p className="lead">
              Tentang diri saya, Abdullah Afif Habiburrohman
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-image">
              <img
                src="/about-image.jpg"
                alt="Workspace"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <h3 className="mb-4">Web-Dev, Mobile-Dev, dan Bisnis</h3>
              <p className="mb-4">
                Saya adalah seorang mahasiswa Software Engineering di
                Universitas Gadjah Mada angkatan 2024. Saya memiliki minat yang
                besar dalam pengembangan web dan aplikasi mobile, serta bisnis.
              </p>
              <p className="mb-4">
                Saya memiliki pengalaman dalam proyek pengembangan aplikasi web
                dan sedang belajar untuk mengembangakan aplikasi mobile.
                Mayoritas pekerjaan saya berfokus pada pengintegrasian teknologi
                untuk menciptakan solusi permasalahan yang terjadi pada sebuah
                bisnis.
              </p>
              <div className="row">
                <div className="col-6">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <strong>Nama:</strong> Abdullah Afif Habiburrohman
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <strong>Pengalaman:</strong> 1+ Tahun Pemrograman, 4+
                      Tahun Pengabdian Masyarakat
                    </li>
                  </ul>
                </div>
              </div>
              <a href="#contact" className="btn btn-primary">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
