import * as React from 'react';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

interface GlassTimePickerProps {
  label: string;
  name: string;
  value: string; // format: 'HH:mm'
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  darkMode: boolean;
}

const GlassTimePicker: React.FC<GlassTimePickerProps> = ({
  label,
  name,
  value,
  onChange,
  darkMode,
}) => {
  console.log('GlassTimePicker rendered with value:', value, 'darkMode:', darkMode);

  const parsedValue =
    value && dayjs(value, 'HH:mm').isValid() ? dayjs(value, 'HH:mm') : null;

  const handleTimeChange = (newValue: dayjs.Dayjs | null) => {
    if (newValue) {
      const fakeEvent = {
        target: {
          name,
          value: newValue.format('HH:mm'),
        },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(fakeEvent);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label={label}
        value={parsedValue}
        onChange={handleTimeChange}
        minutesStep={1}
        ampm
        slotProps={{
          textField: {
            fullWidth: true,
            name,
            variant: 'filled',
            InputLabelProps: {
              shrink: true,
              sx: {
                color: darkMode ? '#ccc' : 'rgba(0,0,0,0.7)',
              },
            },
            InputProps: {
              disableUnderline: true,
              sx: {
              color: darkMode ? '#fff' : '#000',
              },
            },
            sx: {
              mb: 3,
              borderRadius: 2,
                 backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.25)',
              '& .MuiFilledInput-root': {
                backdropFilter: 'blur(10px)',
                backgroundColor: darkMode
                  ? 'rgba(255,255,255,0.05)'
                  : 'rgba(255,255,255,0.25)',
                '&:hover': {
                  backgroundColor: darkMode
                    ? 'rgba(255,255,255,0.1)'
                    : 'rgba(255,255,255,0.3)',
                },
                '&.Mui-focused': {
                  backgroundColor: darkMode
                    ? 'rgba(255,255,255,0.15)'
                    : 'rgba(255,255,255,0.35)',
                },
              },
              '& .MuiInputBase-input': {
                color: darkMode ? '#fff' : '#000',
                fontWeight: 600,
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default GlassTimePicker;
