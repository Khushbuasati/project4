import React from 'react';
import { Stack, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchRoot from './search';

const IconsList = () => {
    const theme = useTheme();
    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <SearchRoot />
            <IconButton size='small'><AccountCircleIcon fontSize='small' sx={{ color: theme.palette.primary.main }} /></IconButton>
            <IconButton size='small'><SettingsIcon fontSize='small' sx={{ color: theme.palette.primary.main }} /></IconButton>
            <IconButton size='small'><NotificationsIcon fontSize='small' sx={{ color: theme.palette.primary.main }} /></IconButton>
        </Stack>
    );
};

export default IconsList;