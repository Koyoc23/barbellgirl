// src/components/InternalNavbar.jsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './InternalNavbar.css';

export default function InternalNavbar() {
    // Sacamos el nombre de la marca de la URL
    const { brandId } = useParams();

    return (
        <nav className="internal-navbar">
            <div className="nav-container">
                {/* Lado izquierdo: Logo/Home */}
                <Link to="/" className="nav-logo">
                    BarbellGirl
                </Link>

                {/* Lado derecho: Nombre de la marca actual */}
                <span className="nav-brand-name">
                    {brandId ? brandId.toUpperCase() : ''}
                </span>
            </div>
        </nav>
    );
}