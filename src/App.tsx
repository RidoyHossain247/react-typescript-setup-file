import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/home";
import './App.css';
import Layout from './layout';
import DetailsPage from './pages/details-page';
import ForgotPassword from './pages/forgot-password';
import Login from './pages/login';
import ResetPassword from './pages/reset-password';
import SignUp from './pages/signup';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/chart-list/:id" element={<DetailsPage />} />
        <Route path="/releted/:id" element={<DetailsPage />} />
      </Routes>
    </Layout>

  );
}

export default App;
