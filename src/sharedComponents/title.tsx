import React from 'react';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

interface Props {
    title: String | any;
    style?: Object;
}

const Title = ({ title, style = {} }: Props) => {
    const theme = useTheme();

    return (
        <Typography
            sx={{ fontSize: '14px', fontWeight: 'bold', color: theme.palette.primary.main, ...style }}
        >
            {title}
        </Typography>
    );
};

export default Title;