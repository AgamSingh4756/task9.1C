import React from 'react';
import './App.css';
import CardList from './CardList';
import Header from './Header';
import NavBar from './NavBar';
import FormComponent from './form';
import Footer from './footer';
import AboutPage from './routes/AboutPage';
import { Auth } from './routes/auth';
import { Routes, Route, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Header />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/auth" element={<Auth />} />
        </Route>
      </Routes>
      <CardList/>
      <FormComponent />
      <Footer />
    </div>
  );
}

export default App;
