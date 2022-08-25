import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeLogin from "./Pages/HomeLogin";
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeLogin />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
