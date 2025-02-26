import React from 'react';

const LocationIcon = ({ width, height, color }) => (
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
    {/* ✅ Forme principale avec bas arrondi */}
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
      stroke={color}
      strokeWidth="1.5"
      fill="none"
    />
    {/* Cercle intérieur (point central) */}
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

export default LocationIcon;