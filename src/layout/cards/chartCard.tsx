import React from 'react';
import { Grid, Paper, Divider, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { chartCards } from '../../data/cards';
import Title from '../../sharedComponents/title';

const ChartCards = () => {
    const theme = useTheme();
    return (
        <Grid container spacing={3} sx={{ marginTop: '0rem', marginLeft: '-8px' }}>
            {chartCards.map((item: any, index: number) => (
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} sx={{ padding: '0.5rem 0.8rem' }}>
                        <Box
                            component="img"
                            src={item.img}
                            width="100%"
                            style={{
                                marginBottom: '1rem',
                                marginTop: '-1.5rem'
                            }}
                        />
                        <Title title={item.title} />
                        <Title
                            title={item.desc}
                            style={{ color: theme.palette.primary.light, fontSize: '12px', fontWeight: 'normal', marginBottom: '0.5rem', marginTop: '2px' }}
                        />
                        <Divider />
                        <Title
                            title={<><AccessTimeIcon sx={{fontSize: '10px', marginRight: '4px'}} />{item.duration}</>}
                            style={{ color: theme.palette.primary.light, fontSize: '10px', fontWeight: 'normal', marginBottom: '0.5rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center' }}
                        />
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
}

export default ChartCards;