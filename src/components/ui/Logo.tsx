import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link to="/\" className={`block ${className}`}>
      <img 
        src="https://i.imgur.com/ZwuXnNJ.png" 
        alt="Steuerwerkstatt Logo" 
        className="h-12 w-auto"
      />
    </Link>
  );
};

export default Logo;