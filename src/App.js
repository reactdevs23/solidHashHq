import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Dashboard from "./pages/DashBoard/Dashboard";
import DeployApplication from "./pages/DeployApplication/DeployApplication";
import BillingAndInvoice from "./pages/Billing/Billing";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/SolidHashHQ" element={<DeployApplication />}></Route>

        <Route path="/billing" element={<BillingAndInvoice />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
