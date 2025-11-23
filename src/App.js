import logo from './logo.svg';
import './App.css';
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HeadProvider } from "react-head";


const Home = React.lazy(() => import('./pages/Home'));
const Product = React.lazy(()=> import('./pages/Product'))
const Header = React.lazy(() => import('./components/Home/Header'));

{/* <Router> */}
function App() {
  return (

        <HeadProvider>

            <Router>
            {/* <Router basename="/meirafoods" > */}
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
                <Routes>
                {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/product" element={<Product />}/>
                  <Route path="/product/:category" element={<Product />} />
                </Routes>
            </Suspense>
            </Router>

        </HeadProvider>
        
   
  );
}

export default App;
