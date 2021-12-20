import React, {Suspense, lazy} from 'react';
import logo from './image/logo.svg';
import './style/App.css';
import Nav from './comp/Nav.js';
import Footer from './comp/Footer.js';
import Home from './comp/Home.js';
import Create from './comp/Create.js';
import arrows from './image/arrows.png';
import MainPage from "./comp/MainPage.js";
//import circle from './1.png'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
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

        </Routes>

        </Suspense>
        <Footer />
        </div>
        </Web3ReactProvider>
        </BrowserRouter>
  );
}

export default App;
