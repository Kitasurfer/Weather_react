import React from 'react';
import { SpinnerWrapper } from './Spinner.styles';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ 
  size = 'md', 
  color 
}) => {
  return <SpinnerWrapper size={size} color={color} />;
};

export default Spinner;
