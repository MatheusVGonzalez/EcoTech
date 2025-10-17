export default function Products() {
  const products = [
    { id: 1, name: 'Solar Panel Kit 5kW', price: '$4,999', desc: 'High-efficiency panels with inverter and mounting hardware.', img: '/solarkit.webp' },
        { id: 2, name: 'Home Battery 10kWh', price: '$6,499', desc: 'Lithium battery for backup and load shifting.', img: '/battery.jpg' },
        { id: 3, name: 'Smart Inverter 6kW', price: '$1,199', desc: 'Wi-Fi enabled inverter with monitoring.', img: '/solarinvert.jpg' },
        { id: 4, name: 'Wind Turbine 2kW', price: '$3,499', desc: 'Compact wind solution for hybrid systems.', img: '/solarwind.webp' },
        { id: 5, name: 'EV Charger', price: '$699', desc: '7.2kW wallbox with Wi‑Fi app and smart scheduling.', img: '/evchar.jpg' },
        { id: 6, name: 'MPPT Charge Controller 60A', price: '$349', desc: 'High-efficiency MPPT controller with LCD and remote monitoring.', img: '/mppt.jpg' },
        { id: 7, name: 'Portable Solar Generator 2kWh', price: '$1,299', desc: 'All-in-one battery + inverter for camping and backup power.', img: '/portable.jpg' },  
    ];
  return (
    <main className="py-5">
      <div className="container">
        <div className="d-flex align-items-end justify-content-between mb-4">
          <h1 className="fw-bold mb-0">Products</h1>
          <a className="btn btn-eco" href="/#contact">Contact to buy</a>
        </div>
        <div className="row g-3">
          {products.map((p) => (
            <div key={p.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="ratio ratio-16x9 products-thumb" style={{ backgroundImage: `url(${p.img})` }} />
                <div className="card-body">
                  <h5 className="card-title mb-1">{p.name}</h5>
                  <div className="text-eco fw-semibold mb-2">{p.price}</div>
                  <p className="card-text text-muted small">{p.desc}</p>
                  <a className="btn btn-outline-success" href="/#contact">Ask about this product</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="alert alert-success mt-4" role="alert">
          Want to purchase? use the form in the Contact section. Your message will be sent via EmailJS.
        </div>
      </div>
    </main>
  );
}
