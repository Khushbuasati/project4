import React from 'react';
import { Stack, AppBar, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import IconsList from './iconsList';

import Title from '../../sharedComponents/title';

const Header = () => {
    const theme = useTheme();
    return (
        <AppBar
            position="static"
            sx={{ backgroundColor: theme.palette.background.paper, boxShadow: 'none', borderRadius: '6px' }}
        >
            <Toolbar sx={{ alignItems: "center", justifyContent: 'space-between', padding: '8px' }}>
                <Stack>
                    <Title
                        title={<><HomeIcon sx={{ fontSize: '15px', mr: 0.5, mb: 0.5 }} /> / Dashboard</>}
                        style={{
                            color: theme.palette.primary.light,
                            fontWeight: 'normal',
                            display: 'flex',
                            alignItems: 'end'
                        }}
                    />
                    <Title title="Dashboard" />
                </Stack>
                <IconsList />
            </Toolbar>
        </AppBar>
    );
};

export default Header;