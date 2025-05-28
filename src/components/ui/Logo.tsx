import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link to="/" className={`block ${className}`}>
      <img 
        src="https://cdn.discordapp.com/attachments/353314778141294596/1375784287663820861/logo_Steuerwerkstatt.png?ex=683443f7&is=6832f277&hm=814db90e63c5579ca4fff3544cbea702656571ff20e3f2086e3bbbb1804e401e" 
        alt="Steuerwerkstatt Logo" 
        className="h-12 w-auto"
      />
    </Link>
  );
};

export default Logo;