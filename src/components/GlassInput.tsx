import React from 'react';
import TextField from '@mui/material/TextField';

interface GlassInputProps {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  darkMode: boolean;
}

const GlassInput: React.FC<GlassInputProps> = ({
  label,
  type,
  name,
  placeholder,
  required,
  value,
  onChange,
  darkMode,
}) => {
  return (
    <TextField
      fullWidth
      variant="filled"
      label={label + (required ? ' *' : '')}
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      sx={{
        mb: 3,
        input: {
          color: darkMode ? '#fff' : '#000',
        },
        backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.25)',
        borderRadius: 2,
        '& .MuiFilledInput-root': {
          backdropFilter: 'blur(10px)',
        },
        '& .MuiInputLabel-root': {
          color: darkMode ? '#ccc' : 'rgba(0,0,0,0.7)',
        },
        '& .MuiFilledInput-root:hover': {
          backgroundColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.3)',
        },
        '& .MuiFilledInput-root.Mui-focused': {
          backgroundColor: darkMode ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.35)',
        },
      }}
    />
  );
};

export default GlassInput;
