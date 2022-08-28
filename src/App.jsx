import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeLogin from "./Pages/HomeLogin";
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Pages/Dashboard";
import CityDetail from "./Pages/CityDetail";

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
        <Route path="/city/:cityname"  element={
            <PrivateRoute>
              <CityDetail />
            </PrivateRoute>
          } />
      </Routes>
    </div>
  );
}

export default App;
