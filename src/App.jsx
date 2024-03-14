import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Movies from "./movies";
import Home from "./Home";
import Account from "./account";
import SignInPage from "./signInPage";
import About from "./about";
import { UserContextProvider } from "./context/userContext";
import { UserContext } from "./context/userContext";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import LoginPage from "./loginPage";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

const queryClient = new QueryClient();

const App = () => {
  const RequireAuth = ({ children }) => {
    const { user, getUser } = useContext(UserContext);
    var userIsLogged = user ? true : false;
    if (!userIsLogged) {
      return <LoginPage />;
    }
    return children;
  };

  return (
    <UserContextProvider>
      <main className="App">
        <QueryClientProvider client={queryClient}>
          <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
          <Router>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route
                path="/account"
                element={
                  <RequireAuth>
                    <Account />
                  </RequireAuth>
                }
              />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/logout" element={<Home />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </main>
    </UserContextProvider>
  );
};

export default App;
