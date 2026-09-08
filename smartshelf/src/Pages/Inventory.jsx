function Inventory({ products }) {

  const totalStock = products.reduce(
    (sum, product) => sum + product.stock,
    0
  );

  const lowStock = products.filter(
    (product) => product.stock > 0 && product.stock < 10
  );

  const outOfStock = products.filter(
    (product) => product.stock === 0
  );

  return (
    <div className="page">

      <div className="page-header">

        <div>
          <h1>Inventory</h1>
          <p>Overview of your current stock levels</p>
        </div>

      </div>


      <div className="inventory-stats">

        <div className="inventory-card">
          <span>📦</span>
          <div>
            <h3>Total Stock</h3>
            <h2>{totalStock}</h2>
          </div>
        </div>

        <div className="inventory-card warning-card">
          <span>⚠️</span>
          <div>
            <h3>Low Stock</h3>
            <h2>{lowStock.length}</h2>
          </div>
        </div>

        <div className="inventory-card danger-card">
          <span>🚫</span>
          <div>
            <h3>Out of Stock</h3>
            <h2>{outOfStock.length}</h2>
          </div>
        </div>

      </div>


      <div className="table-card">

        <h2>Stock Status</h2>

        <table>

          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {products.map((product) => (

              <tr key={product.id}>

                <td>
                  <strong>{product.name}</strong>
                </td>

                <td>{product.category}</td>

                <td>{product.stock} units</td>

                <td>

                  <span
                    className={
                      product.stock === 0
                        ? "status out"
                        : product.stock < 10
                        ? "status low"
                        : "status good"
                    }
                  >
                    {product.stock === 0
                      ? "Out of Stock"
                      : product.stock < 10
                      ? "Low Stock"
                      : "In Stock"}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Inventory;