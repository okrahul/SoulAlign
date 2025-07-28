import React from 'react';
import { FormGroup, FormControlLabel, Checkbox, FormLabel } from '@mui/material';

interface GlassCheckboxGroupProps {
  label: string;
  name: string;
  options: string[];
  selectedValues: string[];
  onChange: (name: string, option: string, checked: boolean) => void;
  darkMode: boolean;
}

const GlassCheckboxGroup: React.FC<GlassCheckboxGroupProps> = ({
  label,
  name,
  options,
  selectedValues,
  onChange,
  darkMode,
}) => {
  return (
    <>
      <FormLabel
        component="legend"
        sx={{
          mb: 1,
          color: darkMode ? '#fff' : '#000',
          fontWeight: '600',
        }}
      >
        {label}
      </FormLabel>
      <FormGroup sx={{ mb: 3, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
        {options.map((option) => (
          <FormControlLabel
            key={option}
            control={
              <Checkbox
                checked={selectedValues.includes(option)}
                onChange={(e) => onChange(name, option, e.target.checked)}
                sx={{
                  color: darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                  '&.Mui-checked': {
                    color: darkMode ? '#bb86fc' : '#667eea',
                  },
                }}
              />
            }
            label={option}
            sx={{ color: darkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)' }}
          />
        ))}
      </FormGroup>
    </>
  );
};

export default GlassCheckboxGroup;
