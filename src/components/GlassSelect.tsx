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

const GlassSelect: React.FC<GlassSelectProps> = ({ label, name, options, value, onChange, darkMode }) => {
  return (
    <TextField
      select
      fullWidth
      variant="filled"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      sx={{
        mb: 3,
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
    >
      <MenuItem value="">
        <em>Select an option</em>
      </MenuItem>
      {options.map((option) => (
        <MenuItem key={option} value={option} sx={{ backgroundColor: darkMode ? '#1a1a2e' : '#fff', color: darkMode ? '#fff' : '#000' }}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default GlassSelect;
