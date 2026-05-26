// src/Navbar.jsx
import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar({ sections }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClasses = isScrolled ? "navbar scrolled" : "navbar";

    return (
        <header className={navbarClasses}>
            {/* 1. El logo ahora vive aquí adentro, alineado a la izquierda */}
            <div className="logo">Barbell.Girl</div>

            {/* 2. Los enlaces de marca alineados a la derecha */}
            <nav className="navLinks">
                {sections.map((sec) => (
                    <a key={sec.id} href={`#${sec.id}`}>
                        {sec.title}
                    </a>
                ))}
            </nav>
        </header>
    );
}