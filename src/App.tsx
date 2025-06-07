import React from 'react';
import './App.css';
import { Layout } from './components/layout/Layout';
import { FeedProvider } from './context/FeedContext';
import { NavBar } from './components/layout/NavBar';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <FeedProvider>
      <div className="App">
      <NavBar/>
        <main>
          <Layout />
        </main>
        <Footer/>
      </div>
    </FeedProvider>
  );
}

export default App;
