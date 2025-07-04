import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section py-5">
      <div className="container">
        <div className="row align-items-center vh100">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1 className="display-4 fw-bold mb-3">
                ABDULLAH AFIF HABIBURROHMAN
              </h1>
              <p className="lead mb-4">
                Mahasiswa Software Engineering Universitas Gadjah Mada angkatan
                2024. Tertarik dengan Web-Development, Mobile Development, dan
                Bisnis.
              </p>
              <div className="hero-buttons">
                <a href="#experiences" className="btn btn-primary btn-lg me-3">
                  Pengalaman
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image text-center">
              <img
                src="hero-image.jpg"
                alt="Abdullah Afif"
                className="img-fluid shadow-lg"
                style={{ maxWidth: "350px", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
