import React, { useState } from 'react';
import { createTheme, CssBaseline, TextField, ThemeProvider } from '@mui/material';
import { AppBarComponent, SideBar } from './components';


export const App: React.FC = (): JSX.Element => {

  const [themMode, setThemeMode] = useState<"light" | "dark">("dark");
  const [sideBarToggle,setSideBarToggle] = useState<boolean>(false);
  const theme = createTheme({
    palette:{
      mode:themMode
    },
    typography:{
      fontSize:14,
    },
  })
  const handleDrawerToggle = React.useCallback(()=>{
      setSideBarToggle(!sideBarToggle);
  },[sideBarToggle])
  const onThemeChange = React.useCallback(()=>{
    setThemeMode(themMode ==="dark"?"light":"dark");
},[themMode])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBarComponent handleDrawerToggle={handleDrawerToggle} onThemeChange={onThemeChange} />
      <SideBar isOpen={sideBarToggle} handleDrawerToggle={handleDrawerToggle} />
      <div>
      </div>
    </ThemeProvider>

  );
};


//export default App;
