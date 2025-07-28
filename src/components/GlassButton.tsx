import React from 'react';
import Button from '@mui/material/Button';

interface GlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  darkMode: boolean;
}

const GlassButton: React.FC<GlassButtonProps> = ({ children, onClick, disabled, type = 'button', darkMode }) => {
  return (
    <Button
      variant="contained"
      type={type}
      onClick={onClick}
      disabled={disabled}
      sx={{
        px: 5,
        py: 1.5,
        fontWeight: 600,
        borderRadius: 3,
        background: darkMode
          ? 'linear-gradient(135deg, #bb86fc 0%, #6200ea 100%)'
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
          background: darkMode
            ? 'linear-gradient(135deg, #9a6eff 0%, #4b00b8 100%)'
            : 'linear-gradient(135deg, #556cd6 0%, #5c3c8c 100%)',
        },
        transition: 'all 0.3s ease',
      }}
    >
      {children}
    </Button>
  );
};

export default GlassButton;
