function Orders({
  products,
  setProducts,
  addActivity
}) {

  const completeOrder = (product) => {

    if (product.stock <= 0) {
      alert("This product is out of stock.");
      return;
    }

    const quantity = 2;

    if (product.stock < quantity) {
      alert("Not enough stock available.");
      return;
    }

    const newStock =
      product.stock - quantity;

    setProducts(
      products.map((p) =>
        p.id === product.id
          ? {
              ...p,
              stock: newStock
            }
          : p
      )
    );

    addActivity(
      `Order completed: ${quantity} × ${product.name}. Stock updated ${product.stock} → ${newStock}`,
      newStock < 10
        ? "warning"
        : "success"
    );
  };

  return (
    <div className="page">

      <div className="page-header">

        <div>
          <h1>🛒 Orders</h1>

          <p>
            Manage customer orders and
            inventory updates.
          </p>
        </div>

      </div>

      <div className="orders-info">

        <div>
          <strong>
            Order #1024
          </strong>

          <span>
            Today
          </span>
        </div>

        <span className="order-status">
          Demo Order
        </span>

      </div>

      <div className="table-card">

        <table>

          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Available Stock</th>
              <th>Order Quantity</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {products.slice(0, 6).map(
              (product) => (

                <tr key={product.id}>

                  <td>
                    <strong>
                      {product.name}
                    </strong>
                  </td>

                  <td>
                    Rs.{product.price}
                  </td>

                  <td>
                    {product.stock}
                  </td>

                  <td>
                    2
                  </td>

                  <td>

                    <button
                      className="complete-btn"
                      onClick={() =>
                        completeOrder(
                          product
                        )
                      }
                      disabled={
                        product.stock < 2
                      }
                    >
                      ✓ Complete Order
                    </button>

                  </td>

                </tr>

              )
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Orders;