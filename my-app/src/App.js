import './App.css';

function Topbar() {
  return (
    <div className="topbar">
      <div className="container d-flex align-items-center justify-content-between py-2">
        <a href="#home" className="brand">
          <span>EcoTech</span>
        </a>
        <div className="nav-links d-flex align-items-center">
          <a href="#">Home</a>
          <a href="">About Us</a>
          <a href="">Services</a>
          <a href="">Project</a>
          <a href="">Pages</a>
          <a href="">Blog</a>
          <a href="">Contact</a>
        </div>
        <button className="btn btn-eco">Get Free Quote</button>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <header className="hero-banner">
      <div className="hero-overlay">
        <div className="container">
          <div className="col-12 col-lg-8">
            <h1 className="hero-title">Solar Energy, The Smart Way To Power Your Home</h1>
            <p className="mt-3 hero-text">
              Growing our position as an international renewable energy provider through flexible, integrated solar and wind solutions.
            </p>
            <div className="hero-actions mt-4">
              <button className="btn btn-eco btn-lg">Our Services</button>
              <button className="btn btn-outline-light btn-lg">Contact Us</button>
            </div>
            <div className="mt-5">
              <span className="indicator active" aria-hidden></span>
              <span className="indicator" aria-hidden></span>
              <span className="indicator" aria-hidden></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Features() {
  const items = [
    { title: 'Solar', text: 'Basic photovoltaic solutions.' },
    { title: 'Wind', text: 'Simple wind integration.' },
    { title: 'Smart Grid', text: 'Intro to smart metering.' },
  ];
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="fw-bold text-eco text-center mb-4">Features</h2>
        <div className="row g-3">
          {items.map((it) => (
            <div key={it.title} className="col-12 col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{it.title}</h5>
                  <p className="card-text text-muted">{it.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="py-5">
      <div className="container">
        <div className="bg-eco text-white rounded-4 p-4 d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div>
            <h3 className="mb-2">Join the movement</h3>
            <p className="mb-0">This is a draft. More sections coming next week.</p>
          </div>
          <button className="btn btn-light mt-3 mt-md-0 text-eco fw-semibold">Get involved</button>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Topbar />
      <Hero />
      <Features />
      <CTA />
    </>
  );
}
