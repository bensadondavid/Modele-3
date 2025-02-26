import React from 'react';

const CalendarIcon = ({ width, height, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* ✅ Contour principal avec bords inférieurs arrondis */}
    <path
      d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5z"
      stroke={color}
      strokeWidth="1.5"
      fill="none"
    />

    {/* Barres supérieures pour les attaches */}
    <line x1="7" y1="1" x2="7" y2="5" />
    <line x1="17" y1="1" x2="17" y2="5" />

    {/* Ligne de séparation de l'en-tête */}
    <line x1="2" y1="8" x2="22" y2="8" />

    {/* Grille pour les jours */}
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="2" y1="16" x2="22" y2="16" />
    <line x1="6" y1="8" x2="6" y2="22" />
    <line x1="10" y1="8" x2="10" y2="22" />
    <line x1="14" y1="8" x2="14" y2="22" />
    <line x1="18" y1="8" x2="18" y2="22" />
  </svg>
);

export default CalendarIcon;