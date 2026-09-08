function LowStock({ products }) {

  const lowStockProducts = products.filter(
    (product) => product.stock < 10
  );

  return (
    <div className="page">

      <div className="page-header">

        <div>
          <h1>Low Stock Items</h1>

          <p>
            Products that need your attention
          </p>
        </div>

      </div>


      <div className="low-stock-banner">
        ⚠️ {lowStockProducts.length} products
        need restocking
      </div>


      <div className="table-card">

        <table>

          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Current Stock</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {lowStockProducts.map((product) => (

              <tr key={product.id}>

                <td>
                  <strong>{product.name}</strong>
                </td>

                <td>{product.category}</td>

                <td className="danger-number">
                  {product.stock}
                </td>

                <td>
                  <span className="status low">
                    {product.stock === 0
                      ? "Out of Stock"
                      : "Low Stock"}
                  </span>
                </td>

                <td>
                  <button className="restock-btn">
                    Restock
                  </button>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default LowStock;