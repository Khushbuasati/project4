import React from 'react';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { colors } from '../../assets/scss/colors';

const BorderLinearProgress = styled(LinearProgress)<any>(({ theme, value }) => ({
    height: 5,
    marginBottom: '0.5rem',
    borderRadius: 2,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[100],
    },
    [`& .${linearProgressClasses.bar}`]: {
        backgroundColor: value === 100 ? theme.palette.success.main : colors.blue500,
    },
}));

interface Props {
    status: string;
}

const ProgressBar = ({ status }: Props) => {
    return (
        <BorderLinearProgress variant="determinate" status={status} value={status} />
    );
}

export default ProgressBar;