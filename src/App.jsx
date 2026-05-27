// src/App.jsx
// Al principio del archivo se agrega la importación de tus datos
import { products } from './data';
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

// 1. En lugar de un import normal, usamos lazy()
const BrandPage = lazy(() => import("./componentes/BrandPage"));

export default function App() {
  return (
    <BrowserRouter>
      {/* 2. Envolvemos nuestras rutas en <Suspense>. 
          El 'fallback' es lo que se muestra mientras la página descarga en milisegundos */}
      <Suspense fallback={<div style={{ color: 'white', textAlign: 'center', marginTop: '100px' }}>Cargando catálogo...</div>}>
        <Routes>
          <Route path="/marca/:brandId" element={<BrandPage productos={products} />} />
          <Route path="/" element={<Home />} />
          <Route path="/marca/:brandId" element={<BrandPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}