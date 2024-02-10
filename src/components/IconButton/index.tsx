import React from 'react';
import { IconType } from 'react-icons';

type IconProps = {
  onClick?: () => void;
  src: IconType;
  size: number;
  className?: string;
};

const IconButton: React.FC<IconProps> = ({ onClick, src, size, className }) => {
  return (
    <div onClick={onClick} className={className}>
      {React.createElement(src, { size })}
    </div>
  );
};

export default IconButton;