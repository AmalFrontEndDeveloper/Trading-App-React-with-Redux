import { Divider, Drawer, IconButton, Typography } from "@mui/material";
import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));
const Logostyled = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
}));
interface Props {
    isOpen: boolean,
 //   isDrawerOpen:boolean,
    handleDrawerToggle: () => void;
}
const DRAWER_WIDTH = 240;

export const SideBar: React.FC<Props> = ({ isOpen, handleDrawerToggle,children }): JSX.Element => {
    const theme = useTheme();
    return (
        <div>
            <Drawer sx={{
                width: DRAWER_WIDTH,
                flexShrink: 0,
                "& .MUIDrawer-paper": {
                    width: DRAWER_WIDTH,
                    boxSizing: "border-box"
                }
            }}
                variant="persistent"
                anchor="left"
                open={isOpen}
            >
                <DrawerHeader>
                    <Logostyled>
                        <Typography variant="subtitle2" component="div" align="left">Repo Logo</Typography>
                    </Logostyled>
                    <IconButton onClick={handleDrawerToggle}>
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                {children}
            </Drawer>
        </div>
    )
};