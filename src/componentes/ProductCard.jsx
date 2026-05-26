// src/components/ProductCard.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Importamos el icono de WhatsApp de la librería FontAwesome (fa)
import { FaWhatsapp } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';

export default function ProductCard({ product }) {

  const handleWhatsApp = () => {
    const phoneNumber = "524741050849"; // <-- ¡Cambia este número real del dueño!
    const message = `Hola, me interesa la prenda: ${product.name} (${product.price}). ¿Aún tienen disponibilidad?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="product-card">
      <div className="carousel-container">
        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          style={{ width: '100%', height: '100%', borderRadius: '8px' }}
        >
          {product.images?.map((imgUrl, index) => (
            <SwiperSlide key={index}>
              <img
                src={imgUrl || 'https://picsum.photos/400/600'}
                alt={`${product.name} - Vista ${index + 1}`}
                className="product-image"
                loading='lazy'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <span className="product-price">{product.price}</span>
      </div>

      {/* Actualizado: Botón ahora solo contiene el icono */}
      <button className="whatsapp-button" onClick={handleWhatsApp} aria-label="Interesado en WhatsApp">
        <FaWhatsapp size={24} /> {/* El icono con un tamaño de 24px */}
      </button>

    </div>
  );
}