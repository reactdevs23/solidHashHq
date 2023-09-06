import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Dashboard from "./pages/DashBoard/Dashboard";
import DeployApplication from "./pages/DeployApplication/DeployApplication";
import BillingAndInvoice from "./pages/Billing/Billing";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const hideNavbar = location.pathname === "/login";
  console.log(hideNavbar);
  useEffect(() => {
    navigate("/login");
  }, []);
  return (
    <>
      {!hideNavbar && <Header />}
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/SolidHashHQ" element={<DeployApplication />}></Route>

        <Route path="/billing" element={<BillingAndInvoice />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>

      {!hideNavbar && <Footer />}
    </>
  );
}

export default App;
