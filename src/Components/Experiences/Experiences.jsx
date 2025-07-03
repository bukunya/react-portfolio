import React from "react";
import "./Experiences.css";

const Experiences = () => {
  const experiences = [
    {
      id: 1,
      company: "PIONIR PERMADANI DTEDI SV UGM",
      position: "Koordinator Humas",
      period: "2025",
      location: "UGM",
      description: [
        "Menjalin komunikasi antar PIONIR PERMADANI DTEDI SV UGM dengan pihak eksternal",
        "Mengurus surat menyurat dan dokumentasi persuratan acara",
        "Memastikan kelancaran kegiatan selama acara berlangsung",
      ],
      link: "https://www.instagram.com/p/DJqx6Cpy8xU/?img_index=2",
    },
    {
      id: 2,
      company: "Vocational Career Days SV UGM",
      position: "Liaison Officer",
      period: "2024",
      location: "UGM",
      description: [
        "Bertugas sebagai penghubung antara peserta dan penyelenggara acara Vocational Career Days",
        "Membantu dalam persiapan dan pelaksanaan acara, termasuk koordinasi dengan perusahaan dan peserta",
        "Memberikan informasi dan dukungan kepada peserta mengenai acara dan peluang karir yang tersedia",
      ],
    },
    {
      id: 3,
      company: "Go English RCE Universitas Gadjah Mada",
      position: "Volunteer Pengajar dan Awardee Volunteer Terbaik",
      period: "2024",
      location: "Suryatmajan, Danurejan, Yogyakarta",
      description: [
        "Mengajar bahasa Inggris untuk anak-anak pra-sekolah, PAUD, TK, SD, dan SMP",
        "Membantu anak-anak dalam memahami kosakata dasar dan percakapan sederhana hingga sedikit kompleks",
        "Mendapatkan penghargaan sebagai Volunteer Terbaik atas dedikasi dan kontribusi dalam mengajar",
      ],
      link: "https://www.instagram.com/p/DCJyB_WPxSM/?img_index=1",
    },
    {
      id: 4,
      company: "Nirmala Berkah Abadi, Horeca Supllier",
      position: "Co-Founder dan Akuntan",
      period: "2023 - Sekarang",
      location: "Kutu Asem, Sleman",
      description: [
        "Membangun bisnis HORECA Supplier yang menyediakan bahan baku makanan dan minuman untuk restoran, kafe, dan hotel",
        "Mengelola keuangan perusahaan, termasuk pembukuan, laporan keuangan, dan perencanaan anggaran",
      ],
    },
    {
      id: 5,
      company: "Taman Bacaan Masyarakat Cendekia",
      position: "Volunteer Pengajaran dan Koordinator Acara Wisuda",
      period: "2023 - 2024",
      location: "Jomblang, Sendangadi, Sleman",
      description: [
        "Mengkoordinasikan kegiatan pengajaran dan literasi untuk anak pra-sekolah, PAUD, TK, SD, dan SMP",
        "Menyusun dan melaksanakan acara wisuda untuk anak-anak yang telah menyelesaikan program literasi",
        "Menjadi designer untuk tugas akhir membuat komik dari hasil karya anak-anak",
      ],
      link: "https://www.instagram.com/p/CxhokjArANW/",
    },
    {
      id: 6,
      company: "Lomba Keagamaan Islam SMA Negeri 2 Yogyakarta",
      position: "Koordinator Publikasi",
      period: "2021 - 2022",
      location: "SMA Negeri 2 Yogyakarta",
      description: [
        "Menyusun timeline, jadwal publikasi, dan mengarahkan tim ke berbagai sekolah di D.I. Yogyakarta",
        "Membuat konten publikasi berupa poster, video, dan artikel, serta mengelola media sosial LKI",
        "Mengundang 50+ Sekolah Dasar dan Menengah untuk mengikuti lomba",
      ],
    },
    {
      id: 7,
      company: "Ramadhan Masjid Nurul Huda Gemawang",
      position: "Koordinator Pengajaran",
      period: "2021 - 2024",
      location: "Masjid Nurul Huda Gemawang",
      description: [
        "Menyusun kurikulum dan jadwal pengajaran",
        "Memastikan lancarnya program kerja taman pendidikan Al-Quran",
        "Membawa murid mengikuti lomba antar Masjid dari Masjid Pogung Raya, Pogung",
      ],
    },
  ];

  return (
    <section id="experiences" className="py-5 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="display-5 fw-bold text-primary">Pengalaman</h2>
            <p className="lead">Programer, Pengabdian Masyarakat, dan Bisnis</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`timeline-item ${
                    index % 2 === 0 ? "left" : "right"
                  }`}
                >
                  <div className="timeline-content">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <div>
                            <h5 className="card-title text-primary mb-1">
                              {exp.position}
                            </h5>
                            <h6 className="text-muted mb-2">{exp.company}</h6>
                          </div>
                          <div className="text-end">
                            <span className="badge bg-secondary mb-1">
                              {exp.period}
                            </span>
                            <br />
                            <small className="text-muted">{exp.location}</small>
                          </div>
                        </div>

                        <ul className="mb-3">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="mb-1 text-muted">
                              {item}
                            </li>
                          ))}
                        </ul>

                        {exp.link && (
                          <a
                            href={exp.link}
                            className="btn btn-secondary btn-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Instagram
                          </a>
                        )}
                      </div>
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

export default Experiences;
