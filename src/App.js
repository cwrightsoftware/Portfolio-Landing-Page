import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <Router>
      <Header />
        <main>
          <HomeScreen />
        </main>
      <Footer />
    </Router>
  );
}

export default App;
