// import Loader from "../loader/loader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthLayout from "../authLayout/authLayout";
import LoginComponent from "../forms/loginComponent/loginComponent";
import SignupComponent from "../forms/signupComponent/signupComponent";
import PasswordRecoveryComponent from "../forms/passwordRecoveryComponent/passwordRecoveryComponent";

function App() {
  return (
    // <Loader />
    <Router>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="auth" element={<LoginComponent />} />
          <Route path="signup" element={<SignupComponent />} />
          <Route path="password" element={<PasswordRecoveryComponent />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
