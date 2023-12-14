import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './primary/Header';
import Footer from './primary/Footer';

/**
 * Main function for personal portfolio site.
 */
function App() {
  return (
    <div className="container container-sm">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
