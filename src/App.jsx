import './App.css'

const skills = [
  {
    title: 'Development Blend',
    icon: '</>',
    description: 'Teknologi yang saya gunakan untuk mengembangkan aplikasi.',
    items: ['PHP', 'Laravel', 'Flutter', 'Dart', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Data & API',
    icon: '{}',
    description: 'Pengelolaan database dan komunikasi antar aplikasi.',
    items: ['MySQL', 'REST API', 'Laravel Sanctum', 'Midtrans'],
  },
  {
    title: 'Documentation',
    icon: 'DOC',
    description: 'Pengolahan data dan pembuatan dokumen kerja.',
    items: ['Microsoft Word', 'Microsoft Excel', 'PhpSpreadsheet'],
  },
  {
    title: 'Daily Tools',
    icon: 'DEV',
    description: 'Peralatan yang saya gunakan selama proses pengembangan.',
    items: ['GitHub', 'Git', 'VS Code', 'Laragon', 'Vite'],
  },
]

const projects = [
  {
    title: 'Blue Light Aquarium',
    category: 'Web Application',
    symbol: 'BLA',
    tone: 'blue',
    image: '/projects/blue-light-aquarium.png',
    role: 'Developer',
    description:
      'Sistem penjualan dan pengelolaan toko akuarium yang mencakup produk, pemasok, stok, pesanan, checkout, laporan, dan pengelolaan pengguna.',
    technologies: ['Laravel', 'PHP', 'Blade', 'MySQL'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/haekal06/BlueLightAquarium',
      },
    ],
  },
  {
    title: 'Loka Padel',
    category: 'Mobile & API',
    symbol: 'LP',
    tone: 'green',
    image: '/projects/loka-padel.png',
    role: 'Backend Developer',
    description:
      'Aplikasi pemesanan lapangan padel. Saya mengembangkan keseluruhan backend, mulai dari autentikasi, data lapangan, booking, riwayat, hingga pembayaran Midtrans.',
    technologies: ['Laravel', 'REST API', 'Sanctum', 'Midtrans'],
    links: [
      {
        label: 'Backend',
        url: 'https://github.com/haekal06/BackendLokaPadel',
      },
      {
        label: 'Frontend',
        url: 'https://github.com/haekal06/FrontendLokaPadel',
      },
    ],
  },
  {
    title: 'PayrollHub',
    category: 'Payroll System',
    symbol: 'PH',
    tone: 'orange',
    image: '/projects/payrollhub.png',
    role: 'Developer',
    description:
      'Sistem penggajian karyawan berdasarkan absensi, kalender kerja, lembur, bonus, dan potongan. Dilengkapi impor Excel, slip gaji, laporan, dan hak akses pengguna.',
    technologies: ['Laravel 13', 'PHP 8.3', 'MySQL', 'Tailwind CSS'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/haekal06/PayrollHub',
      },
    ],
  },
  {
    title: 'ProKick Futsal',
    category: 'Booking System',
    symbol: 'PF',
    tone: 'brown',
    image: '/projects/prokick-futsal.png',
    role: 'Developer',
    description:
      'Sistem pemesanan lapangan futsal dengan fitur pengelolaan lapangan, pemesanan, transaksi, bukti pembayaran, nota, dan dashboard admin.',
    technologies: ['Laravel', 'PHP', 'Blade', 'Bootstrap'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/haekal06/prokick_futsal',
      },
    ],
  },
]

const certificates = [
  {
    title: 'IT Bootcamp: Software Development for Industry',
    issuer: 'Universitas Bina Sarana Informatika',
    year: '2025',
    image: '/certificates/software-development-industry.png',
  },
  {
    title: 'Uji Kompetensi Basis Data',
    issuer: 'PT Jidoka System Indonesia',
    year: '2024',
    image: '/certificates/uji-kompetensi-basis-data.png',
  },
  {
    title: 'Sertifikasi Kompetensi Database Administrator',
    issuer: 'BNSP · LSP Universitas Bina Sarana Informatika',
    year: '2026',
    image: '/certificates/sertifikasi-database-administrator.jpg',
  },
]

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <div className="container navbar-content">
          <a href="#home" className="brand">
            <span className="brand-icon">☕</span>
            <span>
              Muhammad Haekal
              <small>Coffee • Code • Create</small>
            </span>
          </a>

          <nav className="nav-menu">
            <a href="#home">Beranda</a>
            <a href="#about">Tentang</a>
            <a href="#skills">Kemampuan</a>
            <a href="#projects">Proyek</a>
            <a href="#certificates">Sertifikat</a>
            <a href="#contact">Kontak</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-content">
            <div className="hero-copy">
              <p className="eyebrow">
                <span />
                Selamat datang di ruang kreatif saya
              </p>

              <h1>
                Halo, saya
                <strong>Muhammad Haekal.</strong>
              </h1>

              <p className="hero-role">Mahasiswa Sistem Informasi</p>

              <p className="hero-description">
                Saya meracik ide, teknologi, dan pemecahan masalah menjadi
                solusi digital yang fungsional. Memiliki keterampilan dalam
                pengembangan aplikasi, pengelolaan data, dan dokumentasi.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="button button-primary">
                  Jelajahi Proyek
                  <span>→</span>
                </a>

                <a href="#contact" className="button button-secondary">
                  Hubungi Saya
                </a>
              </div>

            </div>

            <div className="hero-visual">
              <div className="coffee-stamp">Freshly Brewed Ideas</div>

              <div className="portrait-card">
                <div className="portrait-placeholder">
                  <img
                    src="/foto-haekal-barista.png"
                    alt="Foto Muhammad Haekal"
                  />
                </div>

                <div className="portrait-caption">
                  <span>Currently brewing</span>
                  <strong>Ideas into digital experiences.</strong>
                </div>
              </div>

              <div className="floating-note note-one">
                <span>☕</span>
                Coffee & Code
              </div>

              <div className="floating-note note-two">
                <span>✦</span>
                Open to Collaborate
              </div>
            </div>
          </div>

          <div className="scroll-indicator">
            <span />
            Scroll untuk menjelajah
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">A little story about me</p>
              <h2>Tentang Saya</h2>
              <p>
                Mengenal lebih dekat latar belakang, ketertarikan, dan perjalanan
                saya dalam bidang teknologi informasi.
              </p>
            </div>

            <div className="about-grid">
              <article className="about-story">
                <span className="quote-mark">“</span>

                <p>
                  Saya adalah mahasiswa semester 6 Program Studi Sistem
                  Informasi di Universitas Bina Sarana Informatika (BSI). Saya
                  memiliki ketertarikan pada teknologi informasi dan
                  pengembangan solusi digital.
                </p>

                <p>
                  Selama perkuliahan, saya terlibat dalam beberapa proyek tim
                  sebagai developer. Saya mengembangkan aplikasi berbasis web,
                  backend API, dan aplikasi mobile, serta terbiasa mengelola
                  data dan dokumen menggunakan Microsoft Word dan Excel.
                </p>

                <p>
                  Bagi saya, proses membuat aplikasi seperti meracik kopi:
                  membutuhkan ketelitian, komposisi yang tepat, dan proses yang
                  terus disempurnakan hingga menghasilkan sesuatu yang
                  bermanfaat.
                </p>
              </article>

              <aside className="about-information">
                <div className="information-card">
                  <span className="information-number">01</span>
                  <div>
                    <small>Pendidikan</small>
                    <strong>Sistem Informasi</strong>
                    <p>Universitas Bina Sarana Informatika</p>
                  </div>
                </div>

                <div className="information-card">
                  <span className="information-number">02</span>
                  <div>
                    <small>Status</small>
                    <strong>Mahasiswa Semester 6</strong>
                    <p>Terbuka untuk belajar dan berkolaborasi</p>
                  </div>
                </div>

                <div className="information-card">
                  <span className="information-number">03</span>
                  <div>
                    <small>Fokus</small>
                    <strong>Solusi Digital</strong>
                    <p>Development, data, dan dokumentasi</p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <div className="section-heading section-heading-light">
              <p className="section-label">Today&apos;s special blend</p>
              <h2>Kemampuan</h2>
              <p>
                Kumpulan teknologi dan peralatan yang saya gunakan dalam proses
                pengembangan.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((skill) => (
                <article className="skill-card" key={skill.title}>
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="menu-dots" />
                  </div>

                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>

                  <div className="skill-tags">
                    {skill.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">Featured brews</p>
              <h2>Proyek Pilihan</h2>
              <p>
                Beberapa proyek yang pernah saya kerjakan selama proses belajar
                dan pengembangan keterampilan.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.title}>
                  <div className={`project-cover ${project.tone}`}>
                    <span className="project-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <img
                      src={project.image}
                      alt={`Tampilan utama ${project.title}`}
                    />

                    <span className="project-category">
                      {project.category}
                    </span>
                  </div>

                  <div className="project-body">
                    <div className="project-title-row">
                      <div>
                        <small>{project.role}</small>
                        <h3>{project.title}</h3>
                      </div>
                    </div>

                    <p>{project.description}</p>

                    <div className="technology-list">
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      {project.links.map((link) => (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          key={link.url}
                        >
                          {link.label}
                          <span>↗</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section certificates-section"
          id="certificates"
        >
          <div className="container">
            <div className="section-heading">
              <p className="section-label">Learning wall</p>
              <h2>Sertifikat</h2>
              <p>
                Dokumentasi pembelajaran dan pengembangan kemampuan yang pernah
                saya selesaikan.
              </p>
            </div>

            <div className="certificates-grid">
              {certificates.map((certificate) => (
                <article
                  className="certificate-card"
                  key={certificate.title}
                >
                  <a
                    className="certificate-preview"
                    href={certificate.image}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Lihat ${certificate.title}`}
                  >
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                    />
                    <span className="certificate-view">Lihat penuh ↗</span>
                  </a>

                  <div className="certificate-information">
                    <small>{certificate.issuer}</small>
                    <h3>{certificate.title}</h3>
                    <span>{certificate.year}</span>
                  </div>
                </article>
              ))}
            </div>

            <p className="certificate-note">
              Klik gambar sertifikat untuk melihatnya dalam ukuran penuh.
            </p>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-card">
              <div className="contact-copy">
                <p className="section-label">Let&apos;s have a conversation</p>
                <h2>Mari Terhubung</h2>
                <p>
                  Tertarik berdiskusi, berkolaborasi, atau mengetahui karya saya
                  lebih lanjut? Jangan ragu untuk menghubungi saya.
                </p>

                <div className="contact-links">
                  <a
                    href="https://github.com/haekal06"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>GH</span>
                    <div>
                      <small>GitHub</small>
                      <strong>@haekal06</strong>
                    </div>
                  </a>

                  <a href="mailto:mhaekal654@gmail.com">
                    <span>EM</span>
                    <div>
                      <small>Email</small>
                      <strong>mhaekal654@gmail.com</strong>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/eekaall._/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>IG</span>
                    <div>
                      <small>Instagram</small>
                      <strong>@eekaall._</strong>
                    </div>
                  </a>
                </div>
              </div>

              <form
                className="contact-form"
                action="https://formsubmit.co/mhaekal654@gmail.com"
                method="POST"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="Pesan baru dari Portofolio Muhammad Haekal"
                />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" className="form-honey" />

                <div className="form-heading">
                  <span>☕</span>
                  <div>
                    <small>Kirim pesan</small>
                    <h3>Mari mulai percakapan</h3>
                  </div>
                </div>

                <label>
                  <span>Nama Lengkap</span>
                  <input
                    type="text"
                    name="nama"
                    placeholder="Masukkan nama lengkap"
                    autoComplete="name"
                    required
                  />
                </label>

                <label>
                  <span>Alamat Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="nama@email.com"
                    autoComplete="email"
                    required
                  />
                </label>

                <label>
                  <span>Nomor Telepon</span>
                  <input
                    type="tel"
                    name="nomor_telepon"
                    placeholder="Contoh: 0812 3456 7890"
                    autoComplete="tel"
                  />
                </label>

                <label>
                  <span>Pesan</span>
                  <textarea
                    name="pesan"
                    rows="5"
                    placeholder="Tuliskan pesan atau keperluan Anda"
                    required
                  />
                </label>

                <button type="submit">
                  Kirim Pesan
                  <span>→</span>
                </button>

                <p className="form-note">
                  Pesan akan diteruskan langsung ke email Muhammad Haekal.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div>
            <strong>☕ Muhammad Haekal</strong>
            <p>Coffee • Code • Create</p>
          </div>

          <p>
            Dibuat dengan React oleh Muhammad Haekal ©{' '}
            {new Date().getFullYear()}
          </p>

          <a href="#home">Kembali ke atas ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
