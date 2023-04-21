import React from 'react';
import {
    Toolbar, Grid, Stack
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTheme } from '@mui/material/styles';

import Title from '../../sharedComponents/title';

export default function LogoSection() {
    const theme = useTheme();
    return (
        <Toolbar sx={{gap: '2px'}}>
            <Stack sx={{ alignItems: 'center' }}>
                <Grid sx={{ marginBottom: '-4px' }}>
                    <KeyboardArrowUpIcon sx={{ border: `1px solid ${theme.palette.background.paper}`, fontSize: '12px' }} />
                    <KeyboardArrowUpIcon sx={{ border: `1px solid ${theme.palette.background.paper}`, fontSize: '12px' }} />
                </Grid>
                <KeyboardArrowDownIcon sx={{ border: `1px solid ${theme.palette.background.paper}`, fontSize: '12px' }} />
            </Stack>
            <Title title="Material Dashboard 2" style={{ color: theme.palette.background.paper }} />
        </Toolbar>
    );
}