import React from 'react';
import  ReactDOM  from 'react-dom/client';
import './index.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import App from './App'
import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <>
    <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<App />} />
    </Routes>
  <Footer />
  </BrowserRouter>
  </>

)
