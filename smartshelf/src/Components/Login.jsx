import { useState } from "react";

const users = [
  {
    email: "admin@smartshelf.com",
    password: "admin123",
    name: "Admin",
    role: "Admin"
  },
  {
    email: "manager@smartshelf.com",
    password: "manager123",
    name: "Manager",
    role: "Inventory Manager"
  },
  {
    email: "staff@smartshelf.com",
    password: "staff123",
    name: "Staff",
    role: "Staff"
  }
];

function Login({ onLogin }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const foundUser = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (!foundUser) {
      setError("Invalid email or password");
      return;
    }

    setError("");
    onLogin(foundUser);
  };

  const fillDemo = (type) => {

    if (type === "admin") {
      setEmail("admin@smartshelf.com");
      setPassword("admin123");
    }

    if (type === "manager") {
      setEmail("manager@smartshelf.com");
      setPassword("manager123");
    }

    if (type === "staff") {
      setEmail("staff@smartshelf.com");
      setPassword("staff123");
    }
  };

  return (
    <div className="login-page">

      <div className="login-left">

        <div className="login-brand">
          📦 SmartShelf
        </div>

        <h1>
          Smarter Inventory.
          <br />
          Better Business.
        </h1>

        <p>
          Manage your products, monitor stock
        </p>

        <div className="login-features">

          <div>
            📦
            <span>
              <strong>Track Your Products</strong>
              <small>Keep everything in one place</small>
            </span>
          </div>

          <div>
            📊
            <span>
              <strong>Manage Stock</strong>
              <small>Know what needs attention</small>
            </span>
          </div>

          <div>
            🔔
            <span>
              <strong>Get Alerts</strong>
              <small>Stay updated with inventory</small>
            </span>
          </div>

        </div>

      </div>

      <div className="login-right">

        <div className="login-card">

          <h2>Welcome Back! 👋</h2>

          <p className="login-subtitle">
            Sign in to your account
          </p>

          <form onSubmit={handleLogin}>

            <label>Email</label>

            <input
              type="email"
              placeholder="admin@smartshelf.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

            {error && (
              <p className="login-error">
                {error}
              </p>
            )}

            <button className="login-btn">
              Sign In →
            </button>

          </form>

          <div className="demo-title">
            Demo Accounts
          </div>

          <div className="demo-accounts">

            <button onClick={() => fillDemo("admin")}>
              <strong>Admin</strong>
              <small>Full Access</small>
            </button>

            <button onClick={() => fillDemo("manager")}>
              <strong>Manager</strong>
              <small>Stock & Orders</small>
            </button>

            <button onClick={() => fillDemo("staff")}>
              <strong>Staff</strong>
              <small>Limited Access</small>
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;