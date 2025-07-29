import { ThemeProvider, useThemeContext } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import FormComponent from './components/FormComponent';
import { Box, Stack, Typography } from '@mui/material';
import './App.css';
import LogoLight from './assets/logo-light.svg';
import LogoDark from './assets/logo-dark.svg';
import Footer from './components/Footer';


const BackgroundWrapper = () => {
  const { darkMode } = useThemeContext();

  return (
    <Box
   sx={{
    position: 'relative',
    background: darkMode
      ? 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)'
      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: darkMode ? '#fff' : '#000',
    overflowX: 'hidden',
  }}
    >
      {/* Animated Background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.3,
          background: darkMode
            ? 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)'
            : 'radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

<Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ padding: 2, zIndex: 10,  }}>
  <img src={darkMode ? LogoLight: LogoDark} alt="Logo" style={{ width: 150 }} />
      <ThemeToggle />

</Stack>

      <Box
        component="main"
        sx={{
          position: 'relative',
          zIndex: 10,
          maxWidth: 768,
          mx: 'auto',
          px: 2,
          py: 8,
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 1,
              background: darkMode
                ? 'linear-gradient(135deg, #bb86fc 0%, #03dac6 100%)'
                : 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            SoulAlign Form Wizard
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 300, opacity: 0.7 }}
          >
           Discover music and films that align with your soul
          </Typography>
        </Box>

        <FormComponent />
      </Box>
    <Footer />


      {/* Animation style (if still needed elsewhere) */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </Box>
  );
};

const App = () => (
  <ThemeProvider>
    <BackgroundWrapper  />
  </ThemeProvider>
);

export default App;
