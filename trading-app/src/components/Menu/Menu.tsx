import React from 'react';
import MenuList from '@mui/material/MenuList';

import { RouteType } from "../../routes";
//import { useNavigate } from "react-router-dom";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';

interface Props {
    links: RouteType[];
}

export const Menu: React.FC<Props> = ({ links }): JSX.Element => {
   // var navigate = useNavigate();
    return (
        <div>
            <MenuList>
                {links?.map((link) => {
                    console.log('Link=============>', link);
                // <MenuItem key={link.path} onClick={()=> {
                //     navigate(link.path);
                // }}>
                //     <ListItemIcon>{<link.icon fontSize='small' />}</ListItemIcon>
                //     <ListItemText>{link.label}</ListItemText>
                // </MenuItem>
                })}
            </MenuList>
        </div>
    )
}