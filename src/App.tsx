import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// defaultTheme
import themes from './themes';

import Main from './layout/index';

function App() {
  return (
    <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes()}>
                <CssBaseline />
                <Main />
            </ThemeProvider>
        </StyledEngineProvider>
  );
}

export default App;
