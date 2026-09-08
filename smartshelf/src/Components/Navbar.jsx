function Navbar({
  sidebarOpen,
  setSidebarOpen,
  user
}) {

  return (
    <div className="navbar">

      <div className="navbar-left">

        <button
          className="menu-btn"
          onClick={() =>
            setSidebarOpen(!sidebarOpen)
          }
        >
          ☰
        </button>

        <input
          type="text"
          placeholder="Search products, orders..."
        />

      </div>

      <div className="navbar-right">

        <span className="notification-icon">
          🔔
        </span>

        <div className="navbar-user">
          👤 {user?.name}
        </div>

      </div>

    </div>
  );
}

export default Navbar;