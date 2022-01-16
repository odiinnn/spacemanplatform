import React, {Suspense} from 'react';
import './style/App.css';
import Nav from './comp/Nav.js';
import Footer from './comp/Footer.js';
import Home from './comp/Home.js';
import Donate from './comp/Donate.js';
import MainPage from "./comp/MainPage.js";
//import circle from './1.png'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'


function getLibrary(provider) {
  return new Web3(provider)
}


function App() {
  return (
<BrowserRouter>
<Web3ReactProvider getLibrary={getLibrary}>
    <div className='App'>
        <Suspense fallback={<Nav />}>
        <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/create" element={<Home />} />
        <Route path="/donate" element={<Donate />} />

        </Routes>

        </Suspense>
        <Footer />
        </div>
        </Web3ReactProvider>
        </BrowserRouter>
  );
}

export default App;
