import React, { useState } from 'react';
import axios from '../node_modules/axios/index';
import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
import Layout from './components/Layout';
import Home from './components/Home';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
