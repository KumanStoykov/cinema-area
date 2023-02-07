import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout/Layout';

function App() {
  return (
    <Layout>
      <div>Hallo</div>
      {/* <Routes>
        <Route path='/home' element={<Home />} />
      </Routes> */}
    </Layout>
  );
}

export default App;
