import React, { useState } from 'react';
import {
    ListItemButton, ListItem, List, ListItemIcon,
    ListItemText
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import ArticleIcon from '@mui/icons-material/Article';
import TableViewIcon from '@mui/icons-material/TableView';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import FormatTextdirectionRToLIcon from '@mui/icons-material/FormatTextdirectionRToL';
import { useTheme } from '@mui/material/styles';

import Title from '../../sharedComponents/title';

const menuListL: any[] = [
    { icon: DashboardIcon, name: 'Dashboard' },
    { icon: TableViewIcon, name: 'Tables' },
    { icon: ReceiptLongIcon, name: 'Billing' },
    { icon: FormatTextdirectionRToLIcon, name: 'RTL' },
    { icon: NotificationsIcon, name: 'Notifications' },
    { icon: PersonIcon, name: 'Profile' },
    { icon: LoginIcon, name: 'Sign In' },
    { icon: ArticleIcon, name: 'Sign Up' },
];

export default function SiderBarMenu() {
    const theme = useTheme();

    const [value, setValue] = useState<number>(0);

    const handleChange = (newValue: number) => {
        setValue(newValue);
    };

    return (
        <List>
            {menuListL.map((item, index) => (
                <ListItem key={item.name} disablePadding>
                    <ListItemButton
                        sx={{
                            background: index === value ? '#2196f3' : 'transparent',
                            borderRadius: '4px',
                            margin: '0rem 1rem',
                            padding: '7px 16px'
                        }}
                        onClick={() => handleChange(index)}
                    >
                        <ListItemIcon sx={{ minWidth: '32px' }}>
                            <item.icon fontSize='small' sx={{ color: index === value ? theme.palette.background.paper : theme.palette.grey[300] }} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Title title={item.name}
                                    style={{ color: index === value ? theme.palette.background.paper : theme.palette.grey[400], fontWeight: 'normal', fontSize: '12px' }}
                                />
                            }
                        />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
}