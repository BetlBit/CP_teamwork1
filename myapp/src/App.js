import React from 'react';
import { Collaborations } from './Collaborations';
import { HiPage } from './HiPage';
import { Navbar } from './Navbar';
import { Product } from './Product';
import { Footer } from './Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HiPage />
      <Collaborations />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
