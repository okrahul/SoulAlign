import { Box, Typography, Stack } from '@mui/material';
import WavingHandIcon from '@mui/icons-material/WavingHand'; // Rename to avoid confusion
import { useThemeContext } from '../context/ThemeContext';

const Footer = () => {
  const { darkMode } = useThemeContext();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        textAlign: 'center',
        backgroundColor: 'transparent',
        color: darkMode ? '#ffffffb3' : '#333', // light text for dark mode, dark for light mode
      }}
    >
      <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
        <Typography variant="body2">© {currentYear || 2025}</Typography>
        <Typography variant="body2">Dev </Typography>
        <a href='https://www.okrahul.dev/' target='_blank'>@okrahul</a>
        <WavingHandIcon fontSize="small" sx={{ color: darkMode ? '#bb86fc' : '#1976d2' }} />
      </Stack>
    </Box>
  );
};

export default Footer;
