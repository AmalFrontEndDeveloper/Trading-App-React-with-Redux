import React from "react";
import { AppBar, IconButton, Toolbar, Typography, Switch as ThemeSwitch } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface Props {
    handleDrawerToggle: () => void;
    onThemeChange: () => void ;
    isDarkMode:boolean;
    isDrawerOpen:boolean;
}
export const AppBarComponent: React.FC<Props> = ({handleDrawerToggle,onThemeChange, isDarkMode, isDrawerOpen}): JSX.Element => {
return(
    <div>
        <AppBar position="static" variant="elevation">
            <Toolbar variant="dense">
                <IconButton color="inherit" onClick={handleDrawerToggle} edge="start"
                sx={{mr:2,...(isDrawerOpen && {display:"none"})}}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="subtitle1" component="div">
                  React Repo Trading App
                </Typography>
                <ThemeSwitch size="small" onChange={onThemeChange} />
            </Toolbar>
        </AppBar>
    </div>
)
};