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
  // Common styles
  const commonSx = {
    mb: 3,
    backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.25)',
    borderRadius: 2,
    '& .MuiFilledInput-root': {
      backdropFilter: 'blur(10px)',
      backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.25)',
      '&:hover': {
        backgroundColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.3)',
      },
      '&.Mui-focused': {
        backgroundColor: darkMode ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.35)',
      },
    },
    '& .MuiInputLabel-root': {
      color: darkMode ? '#ccc' : 'rgba(0,0,0,0.7)',
    },
  };

  // Additional styles for date input, if needed
  const dateSx = {
    // You can customize the date input differently if you want:
    input: {
      color: darkMode ? '#fff' : '#000',
      fontWeight: 600,
      // For date input, sometimes browsers add default styles, you can override here
    },
  };

  return (
    <TextField
      fullWidth
      variant="filled"
      label={label}
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      sx={{
        ...commonSx,
        ...(type === 'date' ? dateSx : {}),
      }}
      InputLabelProps={{
        shrink: type === 'date' ? true : undefined, // always shrink label for date to avoid overlap
      }}
      InputProps={{
        disableUnderline: true,
      }}
    />
  );
};

export default GlassInput;
