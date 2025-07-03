import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="custom-footer py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="footer-content">
              <h5 className="mb-3">Abdullah Afif Habiburrohman</h5>
              <p className="mb-0">Website portfolio</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="footer-social text-md-end">
              <h6 className="mb-3">Follow Me</h6>
              <div className="social-links">
                <a
                  href="https://linkedin.com/in/abdullah-afif-habiburrohman"
                  className="me-3"
                >
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a href="https://github.com/bukunya" className="me-3">
                  <i className="fab fa-github fa-lg"></i>
                </a>
                <a href="https://instagram.com/afifrepo" className="me-3">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">&copy; {currentYear} Abdullah Afif.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
