import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

interface GlassSelectProps {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  darkMode: boolean;
}

const GlassSelect: React.FC<GlassSelectProps> = ({
  label,
  name,
  options,
  value,
  onChange,
  darkMode,
}) => {
  return (
    <TextField
      select
      fullWidth
      variant="filled"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      InputLabelProps={{
        shrink: true,
        sx: {
          color: darkMode ? '#ccc' : 'rgba(0,0,0,0.7)',
        },
      }}
      InputProps={{
        disableUnderline: true,
        sx: {
          textAlign: 'left',            // Fix input text alignment
          color: darkMode ? '#fff' : '#000',
          fontWeight: 600,
        },
      }}
      sx={{
        mb: 3,
        borderRadius: 2,
        backgroundColor: darkMode
          ? 'rgba(255,255,255,0.05)'
          : 'rgba(255,255,255,0.25)',
        '& .MuiFilledInput-root': {
          backdropFilter: 'blur(10px)',
          backgroundColor: darkMode
            ? 'rgba(255,255,255,0.05)'
            : 'rgba(255,255,255,0.25)',
          '&:hover': {
            backgroundColor: darkMode
              ? 'rgba(255,255,255,0.1)'
              : 'rgba(255,255,255,0.3)',
            color: darkMode ? '#fff' : '#000',
          },
          '&.Mui-focused': {
            backgroundColor: darkMode
              ? 'rgba(255,255,255,0.15)'
              : 'rgba(255,255,255,0.35)',
            color: darkMode ? '#fff' : '#000',
          },
        },
        '& .MuiInputBase-input': {
          color: darkMode ? '#fff' : '#000',
          fontWeight: 600,
          textAlign: 'left',  // Ensure text inside input stays left aligned
        },
      }}
    >
      <MenuItem value="">
        <em>Select an option</em>
      </MenuItem>
      {options.map((option) => (
        <MenuItem
          key={option}
          value={option}
          sx={{
            backgroundColor: darkMode ? '#1a1a2e' : '#fff',
            color: darkMode ? '#fff' : '#000',
            '&:hover': {
              backgroundColor: darkMode ? '#333a56' : '#e0e0e0',
              color: darkMode ? '#fff' : '#000', // Keep text visible on hover
            },
          }}
        >
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default GlassSelect;
