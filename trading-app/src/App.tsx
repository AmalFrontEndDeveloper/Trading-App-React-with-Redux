import React, { useState } from 'react';
import { createTheme, CssBaseline, TextField, ThemeProvider } from '@mui/material';
import { AppBarComponent } from './components';


export const App: React.FC = (): JSX.Element => {

  const [themMode, setThemeMode] = useState<"light" | "dark">("dark");

  const theme = createTheme({
    palette:{
      mode:themMode
    },
    typography:{
      fontSize:14,
    },
  })
  const handleDrawerToggle = React.useCallback(()=>{
      //  toggle Drawer here.
  },[])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBarComponent handleDrawerToggle={handleDrawerToggle} />
      <div>
       <TextField value="test" />
      </div>
    </ThemeProvider>

  );
};


//export default App;
