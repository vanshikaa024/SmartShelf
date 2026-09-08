function Analytics({ products }) {

  const categories = {};

  products.forEach((product) => {

    if (!categories[product.category]) {
      categories[product.category] = 0;
    }

    categories[product.category] +=
      product.stock;
  });

  const sortedProducts =
    [...products].sort(
      (a, b) => b.stock - a.stock
    );

  return (
    <div className="page">

      <div className="page-header">

        <div>
          <h1>📈 Analytics</h1>

          <p>
            Inventory insights for better
            decisions.
          </p>
        </div>

      </div>

      <div className="analytics-grid">

        <div className="panel">

          <h2>
            Category-wise Stock
          </h2>

          {Object.entries(categories).map(
            ([category, stock]) => {

              const max =
                Math.max(
                  ...Object.values(
                    categories
                  ),
                  1
                );

              return (
                <div
                  className="analytics-row"
                  key={category}
                >

                  <div className="analytics-label">
                    <span>
                      {category}
                    </span>

                    <strong>
                      {stock} units
                    </strong>
                  </div>

                  <div className="progress-bg">

                    <div
                      className="progress-bar"
                      style={{
                        width: `${
                          (stock / max) *
                          100
                        }%`
                      }}
                    />

                  </div>

                </div>
              );
            }
          )}

        </div>

        <div className="panel">

          <h2>
            📦 Top Stock Products
          </h2>

          {sortedProducts
            .slice(0, 5)
            .map((product) => (

              <div
                className="top-product"
                key={product.id}
              >

                <span>
                  {product.name}
                </span>

                <strong>
                  {product.stock}
                </strong>

              </div>

            ))}

        </div>

      </div>

      <div className="panel">

        <h2>
          ⚠️ Products Needing Attention
        </h2>

        {products
          .filter(
            (product) =>
              product.stock < 10
          )
          .map((product) => (

            <div
              className="alert-row"
              key={product.id}
            >

              <div>
                <strong>
                  {product.name}
                </strong>

                <small>
                  {product.category}
                </small>
              </div>

              <span className="stock-warning">
                {product.stock} units
              </span>

            </div>

          ))}

      </div>

    </div>
  );
}

export default Analytics;