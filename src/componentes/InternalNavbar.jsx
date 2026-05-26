// src/components/InternalNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './InternalNavbar.css';

export default function InternalNavbar({ brandName }) {
    return (
        <nav className="internal-navbar">
            <Link to="/" className="internal-logo">
                BarbellGirl
            </Link>
            <span className="internal-brand">
                {brandName ? brandName.toUpperCase() : ''}
            </span>
        </nav>
    );
}