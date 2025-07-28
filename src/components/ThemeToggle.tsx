import { useThemeContext } from '../context/ThemeContext';
import MaterialUISwitch from './MaterialUISwitch';
import { Box } from '@mui/material';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useThemeContext();

  return (
       <Box
      sx={{
        position: 'fixed',
        top: 24,
        right: 24,
        zIndex: 999,
      }}
    >
      <MaterialUISwitch checked={darkMode} onChange={toggleTheme} />
    </Box>
    // <IconButton
    //   onClick={toggleTheme}
    //   sx={{
    //     position: 'fixed',
    //     top: 24,
    //     right: 24,
    //     backgroundColor: 'rgba(255, 255, 255, 0.1)',
    //     border: '1px solid rgba(255, 255, 255, 0.2)',
    //     color: darkMode ? '#fff' : '#000',
    //     backdropFilter: 'blur(10px)',
    //     '&:hover': {
    //       transform: 'scale(1.1)',
    //       backgroundColor: 'rgba(255, 255, 255, 0.2)',
    //     },
    //     transition: 'all 0.3s ease',
    //   }}
    //   aria-label="Toggle theme"
    // >
    //   {darkMode ? <Sun size={24} /> : <Moon size={24} />}
    // </IconButton>
  );
};

export default ThemeToggle;
