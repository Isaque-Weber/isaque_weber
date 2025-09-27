import React from 'react';
import WhatsappIcon from './WhatsappIcon';

const WhatsAppButton = () => {
  const phoneNumber = '5521967398707';
  const message = encodeURIComponent('Olá! Vim pelo seu site e gostaria de mais informações.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300 ease-in-out transform hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <WhatsappIcon />    </a>
  );
};

export default WhatsAppButton;
