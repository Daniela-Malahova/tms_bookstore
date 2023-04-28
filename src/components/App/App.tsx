import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import AuthLayout from "../authLayout/authLayout";
import LoginComponent from "../forms/loginComponent/loginComponent";
import SignupComponent from "../forms/signupComponent/signupComponent";
import PasswordRecoveryComponent from "../forms/passwordRecoveryComponent/passwordRecoveryComponent";
import Layout from "../layout/layout";
import LayoutMainPage from "../layoutMainPage/layoutMainPage";
import BooksPage from "../../pages/booksPage/booksPage";
import UseAuth from "../../hooks/useAuth";
import RequireAuth from "../../hooks/requireAuth";
import TermsOfUse from "../../pages/termsOfUse/termsOfUse";
import BookPage from "../../pages/bookPage/bookPage";
import { getBooks } from "../../redux/slices/booksSlice";

import "./App.css";
import { getCategories } from "../../redux/slices/categoriesSlice";

function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBooks(currentPage));
  }, [dispatch, currentPage]);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

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
        element={
          <RequireAuth>
            <Layout />
          </RequireAuth>
        }
      >
        <Route path="/" element={<LayoutMainPage />}>
          <Route path="terms" element={<TermsOfUse />} />
          <Route
            path="books/:category"
            element={
              <BooksPage
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            }
          />
        </Route>
        <Route path="/books/:category/:id" element={<BookPage />} />
      </Route>
    </Routes>
  );
}

export default App;
