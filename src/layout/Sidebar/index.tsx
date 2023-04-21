import React from 'react';
import {
    Box, Drawer, Divider,  Button
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { colors } from '../../assets/scss/colors';
import LogoSection from '../logoSection/index';
import SiderBarMenu from './menulist';

const drawerWidth = '18vw';

export default function DrawerRoot() {
    const theme = useTheme();

    return (
        <Box sx={{ paddingRight: '3rem' }}>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        background: theme.palette.grey[800],
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        color: theme.palette.background.paper,
                        height: '97%',
                        margin: '1rem',
                        borderRadius: '8px',
                    }
                }}
                variant="permanent"
                anchor="left"
            >
                <LogoSection />
                <Divider />
                <SiderBarMenu />
                <Button variant='contained' sx={{ margin: 'auto 1rem 1rem 1rem', fontSize: '10px', fontWeight: 'bold', bgcolor: colors.blue500 }}>
                    Upgrade to Pro
                </Button>
            </Drawer>
        </Box>
    );
}