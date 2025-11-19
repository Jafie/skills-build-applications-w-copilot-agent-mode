import React from 'react';

function OctoFitLogo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
    >
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="gradientPurpleBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#ffd700', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Octopus body (circle) */}
      <circle cx="24" cy="18" r="12" fill="#ffffff" opacity="0.95" />

      {/* Octopus eyes */}
      <circle cx="20" cy="15" r="2" fill="#7c3aed" />
      <circle cx="28" cy="15" r="2" fill="#7c3aed" />

      {/* Eye shine */}
      <circle cx="20.5" cy="14.5" r="0.8" fill="white" opacity="0.8" />
      <circle cx="28.5" cy="14.5" r="0.8" fill="white" opacity="0.8" />

      {/* Octopus tentacles (curved paths) */}
      <path d="M 15 30 Q 13 36 13 42" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 19 30 Q 18 36 18 42" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 24 30 Q 24 36 24 42" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 29 30 Q 30 36 30 42" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 33 30 Q 35 36 35 42" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Smile */}
      <path d="M 20 21 Q 24 23 28 21" stroke="#7c3aed" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />

      {/* Muscular arms - dumbbell symbol */}
      <circle cx="9" cy="18" r="3" fill="#ffd700" />
      <rect x="6" y="16.5" width="6" height="3" fill="#ffd700" />
      <circle cx="39" cy="18" r="3" fill="#ffd700" />
      <rect x="36" y="16.5" width="6" height="3" fill="#ffd700" />

      {/* Heart symbol */}
      <path
        d="M 24 24 L 26 26 L 24 28 L 22 26 Z"
        fill="#10b981"
        opacity="0.7"
      />
    </svg>
  );
}

export default OctoFitLogo;
