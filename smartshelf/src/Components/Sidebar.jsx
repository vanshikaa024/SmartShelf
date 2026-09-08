import { Link } from "react-router";

function Sidebar({
  sidebarOpen,
  user,
  onLogout
}) {

  const isAdmin = user?.role === "Admin";
  const isManager =
    user?.role === "Inventory Manager";

  return (
    <div
      className={`sidebar ${
        sidebarOpen ? "" : "collapsed"
      }`}
    >

      <h2>
        📦 <span>SmartShelf</span>
      </h2>

      <nav>

        <Link to="/">
          🏠 <span>Dashboard</span>
        </Link>

        <Link to="/products">
          📦 <span>Products</span>
        </Link>

        {(isAdmin || isManager) && (
          <Link to="/inventory">
            📊 <span>Inventory</span>
          </Link>
        )}

        <Link to="/low-stock">
          ⚠️ <span>Low Stock</span>
        </Link>

        <Link to="/orders">
          🛒 <span>Orders</span>
        </Link>

        {isAdmin && (
          <Link to="/analytics">
            📈 <span>Analytics</span>
          </Link>
        )}

        <Link to="/notifications">
          🔔 <span>Notifications</span>
        </Link>

      </nav>

      <div className="sidebar-user">

        <div className="user-avatar">
          👤
        </div>

        <div className="user-info">
          <strong>{user?.name}</strong>
          <small>{user?.role}</small>
        </div>

        <button
          onClick={onLogout}
          className="logout-btn"
        >
          ↪
        </button>

      </div>

    </div>
  );
}

export default Sidebar;