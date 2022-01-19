import { Drawer } from "@mui/material";
import React from "react";

interface Props {
    isOpen: boolean,
    handleDrawerToggle: () => void;
}
const DRAWER_WIDTH = 240;
export const SideBar: React.FC<Props> = ({ isOpen, handleDrawerToggle }): JSX.Element => {

    return (
        <div>
            <Drawer sx={{
                width:DRAWER_WIDTH,
                flexShrink:0,
                "& .MUIDrawer-paper":{
                    width:DRAWER_WIDTH,
                    boxSizing:"border-box"
                }
            }}
            variant="persistent"
            anchor="left"
            open={isOpen}
            >

            </Drawer>
        </div>
    )
};