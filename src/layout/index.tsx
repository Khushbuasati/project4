import React from 'react';
import { Grid, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Header from './header/index';
import DrawerRoot from './Sidebar/index';
import ChartCards from './cards/chartCard';
import SmallCards from './cards/smallCards';
import ProductsList from './projectSection/index';
import OrderOverviewCard from './cards/orderCard';

const Main = () => {
    const theme = useTheme();
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', background: theme.palette.background.default, p: '0rem' }}>
            <DrawerRoot />
            <Box sx={{ width: '82vw', padding: '1rem 1.2rem 1rem 0rem', height: '100%' }}>
                <Header />
                <Grid container spacing={2} >
                        <SmallCards />
                        <ChartCards />
                    <Grid item xs={12} md={8}>
                        <ProductsList />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <OrderOverviewCard />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
export default Main;
