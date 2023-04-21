import React from 'react';
import { Grid, Paper, Stack, Divider, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { smallCards } from '../../data/cards';
import { colors } from '../../assets/scss/colors';
import Title from '../../sharedComponents/title';

const SmallCards = () => {
    const theme = useTheme();
    return (
        <Grid container spacing={3} sx={{ margin: '0.7rem 0rem 0.5rem -8px' }}>
            {smallCards.map((item: any, index: number) => (
                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={2} sx={{ padding: '0.5rem 0.8rem' }}>
                        <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Avatar sx={{
                                bgcolor: index === 0 ? theme.palette.grey[800]
                                    : index === 1 ? colors.blue500
                                        : index === 2 ? theme.palette.success.main
                                            : colors.pink500,
                                marginTop: '-17px',
                                height: '36px',
                                width: '41px',
                                boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px'
                            }} variant="rounded">
                                <item.icon
                                    sx={{
                                        color: theme.palette.background.paper,
                                        fontSize: '16px'
                                    }}
                                />
                            </Avatar>
                            <Stack>
                                <Title
                                    title={item.title}
                                    style={{ fontSize: '10px', fontWeight: 'normal', color: theme.palette.primary.light }}
                                />
                                <Title title={item.value} style={{ fontSize: '16px', textAlign: 'end', marginBottom: '0.5rem' }} />
                            </Stack>
                        </Grid>
                        <Divider />
                        <Title
                            title={
                                <>{item.percent && <Title
                                    title={`+${item.percent}%`}
                                    style={{ color: theme.palette.success.main, fontSize: '12px', marginRight: '4px' }}
                                />}{item.duration}</>
                            }
                            style={{ color: theme.palette.primary.light, fontSize: '12px', fontWeight: 'normal', marginTop: '2px', display: 'flex' }}
                        />
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
}

export default SmallCards;