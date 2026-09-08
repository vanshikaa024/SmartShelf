import { useState } from "react";

function Products({ products, setProducts }) {

  const [selectedCategory, setSelectedCategory] =
    useState("All Categories");

  const [search, setSearch] = useState("");

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "Electronics",
    price: "",
    stock: ""
  });

  const filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Categories" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleDelete = (id) => {
    setProducts(
      products.filter((product) => product.id !== id)
    );
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    const product = {
      id: Date.now(),
      name: newProduct.name,
      category: newProduct.category,
      price: Number(newProduct.price),
      stock: Number(newProduct.stock)
    };

    setProducts([product, ...products]);

    setNewProduct({
      name: "",
      category: "Electronics",
      price: "",
      stock: ""
    });

    setIsModalOpen(false);
  };

  const handleReset = () => {

    const confirmed =
      window.confirm("Reset products to original data?");

    if (confirmed) {
      localStorage.removeItem("smartshelf_products");

      window.location.reload();
    }
  };

  return (
    <div className="page">

      <div className="page-header">

        <div>
          <h1>Products ({products.length})</h1>

          <p>
            Manage and monitor all inventory items
          </p>
        </div>

        <div className="button-group">

          <button
            className="cancel-btn"
            onClick={handleReset}
          >
            🔄 Reset
          </button>

          <button
            className="add-btn"
            onClick={() => setIsModalOpen(true)}
          >
            + Add Product
          </button>

        </div>

      </div>


      {/* SEARCH AND FILTER */}

      <div className="product-controls">

        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={(e) =>
            setSelectedCategory(e.target.value)
          }
        >
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Stationery</option>
          <option>Furniture</option>
          <option>Accessories</option>
        </select>

      </div>


      {/* PRODUCT TABLE */}

      <div className="table-card">

        <table>

          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredProducts.map((product) => (

              <tr key={product.id}>

                <td>
                  <strong>
                    {product.name}
                  </strong>
                </td>

                <td>{product.category}</td>

                <td>₹{product.price.toLocaleString()}</td>

                <td>{product.stock}</td>

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

                <td>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      handleDelete(product.id)
                    }
                  >
                    🗑️
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>


      {/* ADD PRODUCT MODAL */}

      {isModalOpen && (

        <div className="modal-overlay">

          <div className="modal-card">

            <h2>Add New Product</h2>

            <form onSubmit={handleAddProduct}>

              <div className="form-group">

                <label>Product Name</label>

                <input
                  required
                  type="text"
                  placeholder="Enter product name"
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      name: e.target.value
                    })
                  }
                />

              </div>


              <div className="form-group">

                <label>Category</label>

                <select
                  value={newProduct.category}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      category: e.target.value
                    })
                  }
                >
                  <option>Electronics</option>
                  <option>Stationery</option>
                  <option>Furniture</option>
                  <option>Accessories</option>
                </select>

              </div>


              <div className="form-group">

                <label>Price (₹)</label>

                <input
                  required
                  type="number"
                  min="0"
                  placeholder="Enter price"
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      price: e.target.value
                    })
                  }
                />

              </div>


              <div className="form-group">

                <label>Stock Quantity</label>

                <input
                  required
                  type="number"
                  min="0"
                  placeholder="Enter quantity"
                  value={newProduct.stock}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      stock: e.target.value
                    })
                  }
                />

              </div>


              <div className="modal-actions">

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() =>
                    setIsModalOpen(false)
                  }
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="add-btn"
                >
                  Save Product
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default Products;