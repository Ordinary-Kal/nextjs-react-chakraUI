import { Button } from '@chakra-ui/react';
import React from 'react';

const ChakraButton = ({ label, variant, size, onClick, disabled, props }) => {
  const handleClick = () => {
    console.info('clicked!');
    onClick();
  };

  return (
    <Button
      variant={variant}
      size={size}
      isDisabled={disabled}
      onClick={handleClick}
      {...props}>
      {label}
    </Button>
  );
};

export default ChakraButton;
