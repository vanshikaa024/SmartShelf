import { useEffect, useState } from "react";
import {BrowserRouter,Routes,Route,Navigate} from "react-router";

import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";

import Login from "./Components/Login";
import Dashboard from "./Pages/Dashboard";
import Products from "./Pages/Products";
import LowStock from "./Pages/LowStock";
import Orders from "./Pages/Orders";
import Analytics from "./Pages/Analytics";

import "./App.css";

const defaultProducts = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 599,
    stock: 5
  },
  {
    id: 2,
    name: "Keyboard",
    category: "Electronics",
    price: 999,
    stock: 25
  },
  {
    id: 3,
    name: "A4 Notebook",
    category: "Stationery",
    price: 80,
    stock: 7
  },
  {
    id: 4,
    name: "USB-C Cable",
    category: "Accessories",
    price: 299,
    stock: 3
  },
  {
    id: 5,
    name: "Ergonomic Desk Chair",
    category: "Furniture",
    price: 7499,
    stock: 12
  },
  {
    id: 6,
    name: "Mechanical Pencil",
    category: "Stationery",
    price: 45,
    stock: 40
  },
  {
    id: 7,
    name: "27-inch 4K Monitor",
    category: "Electronics",
    price: 18999,
    stock: 8
  },
  {
    id: 8,
    name: "Sticky Notes Pack",
    category: "Stationery",
    price: 120,
    stock: 60
  },
  {
    id: 9,
    name: "Noise Cancelling Headphones",
    category: "Electronics",
    price: 4999,
    stock: 4
  },
  {
    id: 10,
    name: "Adjustable Laptop Stand",
    category: "Accessories",
    price: 1299,
    stock: 18
  }
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("smartshelf_user") !== null
  );

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("smartshelf_user");

    try {
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("smartshelf_products");

    try {
      return savedProducts
        ? JSON.parse(savedProducts)
        : defaultProducts;
    } catch {
      return defaultProducts;
    }
  });

  const [activities, setActivities] = useState(() => {
    const savedActivities = localStorage.getItem(
      "smartshelf_activities"
    );

    try {
      return savedActivities
        ? JSON.parse(savedActivities)
        : [];
    } catch {
      return [];
    }
  });

  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    localStorage.setItem(
      "smartshelf_products",
      JSON.stringify(products)
    );
  }, [products]);

  useEffect(() => {
    localStorage.setItem(
      "smartshelf_activities",
      JSON.stringify(activities)
    );
  }, [activities]);

  const login = (loggedInUser) => {
    setUser(loggedInUser);
    setIsLoggedIn(true);

    localStorage.setItem(
      "smartshelf_user",
      JSON.stringify(loggedInUser)
    );
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);

    localStorage.removeItem("smartshelf_user");
  };

  const addActivity = (message, type = "info") => {
    const newActivity = {
      id: Date.now(),
      message,
      type,
      time: new Date().toLocaleTimeString()
    };

    setActivities((prev) => [
      newActivity,
      ...prev
    ].slice(0, 10));
  };

  return (
    <BrowserRouter>

      {!isLoggedIn ? (
        <Routes>
          <Route
            path="*"
            element={<Login onLogin={login} />}
          />
        </Routes>
      ) : (

        <div
          className={`app ${
            sidebarOpen ? "" : "sidebar-collapsed"
          }`}
        >

          <Sidebar
            sidebarOpen={sidebarOpen}
            user={user}
            onLogout={logout}
          />

          <div className="main">

            <Navbar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              user={user}
            />

            <Routes>

              <Route
                path="/"
                element={
                  <Dashboard
                    products={products}
                    activities={activities}
                  />
                }
              />

              <Route
                path="/products"
                element={
                  <Products
                    products={products}
                    setProducts={setProducts}
                    addActivity={addActivity}
                  />
                }
              />

              <Route
                path="/low-stock"
                element={
                  <LowStock
                    products={products}
                    setProducts={setProducts}
                    addActivity={addActivity}
                  />
                }
              />

              <Route
                path="/orders"
                element={
                  <Orders
                    products={products}
                    setProducts={setProducts}
                    addActivity={addActivity}
                  />
                }
              />

              <Route
                path="/analytics"
                element={
                  <Analytics
                    products={products}
                  />
                }
              />

              <Route
                path="/notifications"
                element={
                  <Notifications
                    activities={activities}
                  />
                }
              />

              <Route
                path="*"
                element={<Navigate to="/" />}
              />

            </Routes>

          </div>

        </div>
      )}

    </BrowserRouter>
  );
}

export default App;