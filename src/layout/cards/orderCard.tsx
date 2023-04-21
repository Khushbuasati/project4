import React from 'react';
import { Paper, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useTheme } from '@mui/material/styles';
import { colors } from '../../assets/scss/colors';
import Title from '../../sharedComponents/title';
import { orders } from '../../data/orders';

const OrderOverviewCard = () => {
    const theme = useTheme();
    return (
        <Paper sx={{padding: '1rem'}}>
            <Title title="Orders overview" />
            <Title
                title={<>
                    <ArrowUpwardIcon sx={{ fontSize: '15px', color: theme.palette.success.main, marginBottom: '-3px' }} /> <b>24%</b> this month
                </>}
                style={{ fontSize: '10px', fontWeight: 'normal', marginTop: '0.4rem' }}
            />
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {orders.map((item: any, index: number) => (
                    <ListItem sx={{ paddingLeft: '0px' }}>
                        <ListItemAvatar sx={{minWidth: '45px'}}>
                            <Avatar
                                sx={{
                                    bgcolor: index === 0 ? theme.palette.success.main
                                        : index === 1 ? theme.palette.warning.dark
                                            : index === 2 ? colors.blue500
                                                : index === 3 ? theme.palette.warning.main
                                                    : colors.pink500,
                                    height: '36px',
                                    width: '36px',
                                }}
                            >
                                <item.icon sx={{
                                    color: theme.palette.background.paper,
                                    fontSize: '14px'
                                }} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={<Title title={item.title} style={{ fontSize: '10px' }} />}
                            secondary={<Title title={item.duration} style={{ fontSize: '10px', fontWeight: 'normal', color: theme.palette.primary.light }} />}
                        />
                    </ListItem>))}
            </List>
        </Paper>
    )
};
export default OrderOverviewCard;
