import { BrowserRouter as Router, Routes,Route,Navigate } from "react-router-dom";

import Homepage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
// Ojo aquí: ClientePage lo tenías con minuscula la "p"
import ClientePage from "../pages/ClientePage";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    
    <Router>
        <NavBar/>
       <div className="container">

       <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/About" element={<AboutPage/>} />
      <Route path="/Cliente" element={<ClientePage/>} />
      <Route path="/Login" element={<LoginPage/>} />
      {/* <Route path="/*" element={<Navigate  to="/" replace />} />  */}
      </Routes>
   
       </div>
   
    <Footer />
    </Router>
    
  );
};

export default AppRouter;