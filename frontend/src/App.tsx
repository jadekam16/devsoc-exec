// App.tsx
import React from 'react';
import Navbar from './components/navbar';
import MainPage from './pages/mainPage';
import { CssBaseline } from '@mui/material';
import LandingPage from './pages/landingPage';

const App: React.FC = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <main>
        <LandingPage />
        <MainPage />
      </main>
    </div>
  );
};

export default App;
