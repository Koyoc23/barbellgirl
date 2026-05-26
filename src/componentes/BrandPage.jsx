// src/components/BrandPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data';
import ProductCard from './ProductCard';
import InternalNavbar from './InternalNavbar'; // <-- Importación
import './BrandPage.css';

export default function BrandPage() {
    const { brandId } = useParams();
    const navigate = useNavigate();

    const brandProducts = products.filter(item => item.brand === brandId);

    return (
        <div className="brand-page-container">

            {/* AQUÍ ESTÁ LA SOLUCIÓN: Insertamos la barra y le pasamos la marca */}
            <InternalNavbar brandName={brandId} />

            <button className="back-button" onClick={() => navigate(-1)}>
                ← Volver
            </button>

            {/* Nota: Borré el <h1 className="brand-title"> de aquí porque ya no es necesario */}

            <div className="products-grid">
                {brandProducts.length > 0 ? (
                    brandProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p className="empty-message">
                        Aún no hay productos cargados para esta marca.
                    </p>
                )}
            </div>

        </div>
    );
}