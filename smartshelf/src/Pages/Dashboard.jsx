function Dashboard({
  products,
  activities
}) {

  const totalProducts = products.length;

  const totalStock = products.reduce(
    (sum, product) => sum + product.stock,
    0
  );

  const lowStock = products.filter(
    (product) =>
      product.stock > 0 &&
      product.stock < 10
  );

  const outOfStock = products.filter(
    (product) => product.stock === 0
  );

  const healthy = products.filter(
    (product) => product.stock >= 10
  );

  return (
    <div className="dashboard">

      <div className="dashboard-heading">

        <div>
          <h1>Good Morning, Admin! 👋</h1>
          <p>
            Here's what's happening with your
            inventory today.
          </p>
        </div>

      </div>

      {/* STATS */}

      <div className="stats">

        <div className="card">
          <span className="card-icon">📦</span>
          <h3>Total Products</h3>
          <h2>{totalProducts}</h2>
          <p>Products in inventory</p>
        </div>

        <div className="card">
          <span className="card-icon">📊</span>
          <h3>Total Stock</h3>
          <h2>{totalStock}</h2>
          <p>Units available</p>
        </div>

        <div className="card">
          <span className="card-icon">⚠️</span>
          <h3>Low Stock</h3>
          <h2>{lowStock.length}</h2>
          <p className="danger-text">
            Need attention
          </p>
        </div>

        <div className="card">
          <span className="card-icon">🔴</span>
          <h3>Out of Stock</h3>
          <h2>{outOfStock.length}</h2>
          <p className="danger-text">
            Critical items
          </p>
        </div>

      </div>

      <div className="dashboard-grid">

        {/* INVENTORY HEALTH */}

        <div className="panel">

          <h2>💚 Inventory Health</h2>

          <div className="health-container">

            <div className="health-circle">

              <strong>
                {totalProducts === 0
                  ? 0
                  : Math.round(
                      (healthy.length /
                        totalProducts) *
                        100
                    )}
                %
              </strong>

              <span>Healthy</span>

            </div>

            <div className="health-details">

              <p>
                🟢 Healthy
                <strong>
                  {healthy.length}
                </strong>
              </p>

              <p>
                🟡 Low Stock
                <strong>
                  {lowStock.length}
                </strong>
              </p>

              <p>
                🔴 Critical
                <strong>
                  {outOfStock.length}
                </strong>
              </p>

            </div>

          </div>

        </div>

        {/* RECENT ACTIVITY */}

        <div className="panel">

          <div className="panel-header">
            <h2>🔔 Recent Activity</h2>
          </div>

          {activities.length === 0 ? (

            <p className="empty-text">
              No recent activity.
            </p>

          ) : (

            activities.slice(0, 4).map(
              (activity) => (

                <div
                  className="activity-row"
                  key={activity.id}
                >

                  <span>
                    {activity.type === "warning"
                      ? "⚠️"
                      : activity.type === "success"
                      ? "✅"
                      : "🔵"}
                  </span>

                  <div>
                    <strong>
                      {activity.message}
                    </strong>

                    <small>
                      {activity.time}
                    </small>
                  </div>

                </div>

              )
            )

          )}

        </div>

      </div>

      {/* LOW STOCK */}

      <div className="panel">

        <div className="panel-header">
          <h2>⚠️ Low Stock Alerts</h2>
          <span className="badge">
            {lowStock.length} items
          </span>
        </div>

        {lowStock.length === 0 ? (

          <div className="success-message">
            🎉 No low-stock products!
          </div>

        ) : (

          lowStock.slice(0, 5).map(
            (product) => (

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
                  {product.stock} left
                </span>

              </div>

            )
          )

        )}

      </div>

      {/* STOCK MOVEMENT */}

      <div className="panel stock-movement-panel">

        <div className="panel-header">

          <div>
            <h2>📈 Stock Movement</h2>
            <p className="chart-subtitle">
              Current stock by product
            </p>
          </div>

        </div>

        <div className="stock-bars">

          {products.slice(0, 8).map(
            (product) => {

              const maxStock = Math.max(
                ...products.map(
                  (p) => p.stock
                ),
                1
              );

              const height =
                (product.stock /
                  maxStock) *
                100;

              return (
                <div
                  className="stock-bar-item"
                  key={product.id}
                >

                  <div className="bar-wrapper">

                    <div
                      className="stock-bar"
                      style={{
                        height: `${height}%`
                      }}
                    >
                      <span>
                        {product.stock}
                      </span>
                    </div>

                  </div>

                  <small>
                    {product.name.substring(
                      0,
                      8
                    )}
                  </small>

                </div>
              );
            }
          )}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;