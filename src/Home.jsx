import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos el hook de navegación
import Navbar from './componentes/Navbar';
import './Home.css'; // Mantenemos los mismos estilos

const sections = [
    { id: 'gymshark', title: 'GYM SHARK', image: '/img/hero/gymshark3.avif' },
    { id: 'youngla', title: 'YOUNGLA', image: '/img/hero/youngla1.webp' },
    { id: 'dfyne', title: 'Dfyne', image: '/img/hero/dfyne2.webp' },
    { id: 'alo', title: 'ALO', image: '/img/hero/alo1.jpg' }
];

export default function Home() {
    const navigate = useNavigate(); // Inicializamos el navegador

    return (
        <div className="container">
            <Navbar sections={sections} />

            <main className="main-content">
                {sections.map((sec) => (
                    <section
                        key={sec.id}
                        id={sec.id}
                        className="heroSection"
                        style={{ backgroundImage: `url(${sec.image})`, cursor: 'pointer' }} // Agregamos el cursor de manita
                        onClick={() => navigate(`/marca/${sec.id}`)} // Al hacer clic, nos lleva a la ruta de la marca
                    >
                        <div className="overlay"></div>
                        <h1 className="title">{sec.title}</h1>
                    </section>
                ))}
            </main>
        </div>
    );
}