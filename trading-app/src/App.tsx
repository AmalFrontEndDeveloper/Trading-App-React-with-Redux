import React, { useState } from 'react';
import { createTheme, CssBaseline, TextField, ThemeProvider } from '@mui/material';
import { AppBarComponent, SideBar, Menu } from './components';
import { ROUTES } from './routes';
//import { ROUTES } from './routes';


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
      <AppBarComponent handleDrawerToggle={handleDrawerToggle} onThemeChange={onThemeChange} isDarkMode={themMode==="dark"} isDrawerOpen={sideBarToggle} />
      <SideBar isOpen={sideBarToggle} handleDrawerToggle={handleDrawerToggle} children={<Menu links={ROUTES} />} />
      <div>
      </div>
    </ThemeProvider>

  );
};


//export default App;
