import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // 1. Importación limpia aquí
import InternalNavbar from './InternalNavbar';
import ProductCard from './ProductCard';
import './BrandPage.css';

export default function BrandPage({ productos }) {
    const { brandId } = useParams();

    const [generoActivo, setGeneroActivo] = useState('todos');
    const [categoriaActiva, setCategoriaActiva] = useState('todas');

    const manejarCambioGenero = (nuevoGenero) => {
        setGeneroActivo(nuevoGenero);
        setCategoriaActiva('todas');
    };

    // Motor de Filtrado
    const productosFiltrados = productos.filter((producto) => {
        const coincideMarca = producto.brand === brandId;
        const coincideGenero = generoActivo === 'todos' || producto.gender === generoActivo;
        const coincideCategoria = categoriaActiva === 'todas' || producto.category === categoriaActiva;

        return coincideMarca && coincideGenero && coincideCategoria;
    });

    return (
        <div className="brand-page">
            <InternalNavbar />

            {/* SECCIÓN DE FILTROS */}
            <div className="filtros-container">
                <div className="filtro-genero">
                    <button className={generoActivo === 'todos' ? 'activo' : ''} onClick={() => manejarCambioGenero('todos')}>Todos</button>
                    <button className={generoActivo === 'hombre' ? 'activo' : ''} onClick={() => manejarCambioGenero('hombre')}>Hombre</button>
                    <button className={generoActivo === 'mujer' ? 'activo' : ''} onClick={() => manejarCambioGenero('mujer')}>Mujer</button>
                </div>

                {generoActivo !== 'todos' && (
                    <div className="filtro-categoria">
                        <button className={categoriaActiva === 'todas' ? 'activo' : ''} onClick={() => setCategoriaActiva('todas')}>
                            Todo {generoActivo === 'hombre' ? 'Hombre' : 'Mujer'}
                        </button>

                        <button className={categoriaActiva === 'sudaderas' ? 'activo' : ''} onClick={() => setCategoriaActiva('sudaderas')}>Sudaderas</button>
                        <button className={categoriaActiva === 'playeras' ? 'activo' : ''} onClick={() => setCategoriaActiva('playeras')}>Playeras</button>
                        <button className={categoriaActiva === 'shorts' ? 'activo' : ''} onClick={() => setCategoriaActiva('shorts')}>Shorts</button>
                        <button className={categoriaActiva === 'pants' ? 'activo' : ''} onClick={() => setCategoriaActiva('pants')}>Pants</button>

                        {generoActivo === 'mujer' && (
                            <>
                                <button className={categoriaActiva === 'leggings' ? 'activo' : ''} onClick={() => setCategoriaActiva('leggings')}>Leggings</button>
                                <button className={categoriaActiva === 'tops' ? 'activo' : ''} onClick={() => setCategoriaActiva('tops')}>Tops</button>
                            </>
                        )}
                    </div>
                )}
            </div>

            {/* RENDERIZADO DE PRODUCTOS */}
            <div className="grid-productos">
                {productosFiltrados.map((item) => (
                    <ProductCard
                        key={item.id}
                        product={item}
                    />
                ))}
            </div>

            {/* 2. AQUÍ SE AGREGA: El contenedor centrado justo antes del final */}
            <div className="volver-container">
                <Link to="/" className="btn-volver">
                    Volver
                </Link>
            </div>
        </div>
    );
}