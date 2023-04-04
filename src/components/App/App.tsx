import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthLayout from "../authLayout/authLayout";
import LoginComponent from "../forms/loginComponent/loginComponent";
import SignupComponent from "../forms/signupComponent/signupComponent";
import PasswordRecoveryComponent from "../forms/passwordRecoveryComponent/passwordRecoveryComponent";
import BooksPage from "../../pages/booksPage/booksPage";
import UseAuth from "../../hooks/useAuth";
import RequireAuth from "../../hooks/requireAuth";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <UseAuth>
            <AuthLayout />
          </UseAuth>
        }
      >
        <Route path="auth" element={<LoginComponent />} />
        <Route path="signup" element={<SignupComponent />} />
        <Route path="password" element={<PasswordRecoveryComponent />} />
      </Route>
      <Route
        path="/books"
        element={
          <RequireAuth>
            <BooksPage />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default App;
