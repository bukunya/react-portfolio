import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Mengirim pesan...");

    const formData = new FormData(event.target);
    formData.append("access_key", "6963ac4b-d8b3-4a79-9d3c-035337085923");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Pesan berhasil dikirim! Terima kasih.");
        event.target.reset();
        setTimeout(() => setResult(""), 5000);
      } else {
        console.log("Error", data);
        setResult("Terjadi kesalahan. Silakan coba lagi.");
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="display-5 fw-bold text-primary">Kontak</h2>
            <p className="lead">
              Hubungi saya untuk pertanyaan atau kolaborasi
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="text-center">
                  <div className="contact-icon mb-3">
                    <i className="fas fa-envelope fa-2x text-primary"></i>
                  </div>
                  <h5>Email</h5>
                  <p>abdullahafifh@gmail.com</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="text-center">
                  <div className="contact-icon mb-3">
                    <i className="fas fa-phone fa-2x text-primary"></i>
                  </div>
                  <h5>Telepon</h5>
                  <p>085159917205</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="text-center">
                  <div className="contact-icon mb-3">
                    <i className="fas fa-map-marker-alt fa-2x text-primary"></i>
                  </div>
                  <h5>Alamat</h5>
                  <p>Sleman, D.I. Yogyakarta</p>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-12">
                <form onSubmit={onSubmit} className="contact-form">
                  <input
                    type="hidden"
                    name="access_key"
                    value="6963ac4b-d8b3-4a79-9d3c-035337085923"
                  />

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Nama Anda"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email Anda"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subjek"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Pesan Anda"
                      required
                    ></textarea>
                  </div>

                  {result && (
                    <div
                      className={`alert ${
                        result.includes("berhasil")
                          ? "alert-success"
                          : result.includes("Mengirim")
                          ? "alert-info"
                          : "alert-danger"
                      } text-center mb-3`}
                    >
                      {result}
                    </div>
                  )}

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      disabled={result === "Mengirim pesan..."}
                    >
                      {result === "Mengirim pesan..."
                        ? "Mengirim..."
                        : "Kirim Pesan"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
