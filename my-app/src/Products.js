export default function Products() {
  const products = [
    { id: 1, name: 'Solar Panel Kit 5kW', price: '$4,999', desc: 'High-efficiency panels with inverter and mounting hardware.', img: '/product-1.svg' },
    { id: 2, name: 'Home Battery 10kWh', price: '$6,499', desc: 'Lithium battery for backup and load shifting.', img: '/product-2.svg' },
    { id: 3, name: 'Smart Inverter 6kW', price: '$1,199', desc: 'Wi-Fi enabled inverter with monitoring.', img: '/product-3.svg' },
    { id: 4, name: 'Wind Turbine 2kW', price: '$3,499', desc: 'Compact wind solution for hybrid systems.', img: '/product-4.svg' },
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
          Want to purchase? Use the form in the Contact section. Your message will be sent via EmailJS.
        </div>
      </div>
    </main>
  );
}
