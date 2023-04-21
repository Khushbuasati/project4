import React from 'react';
import { Grid, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckIcon from '@mui/icons-material/Check';
import { colors } from '../../assets/scss/colors';
import Title from '../../sharedComponents/title';

const Header = () => {
    return (
        <Grid container justifyContent="space-between" sx={{padding: '1rem 1rem 0rem'}}>
            <Grid item>
                <Title title="Projects" />
                <Title
                    title={<>
                        <CheckIcon sx={{ fontSize: '15px', color: colors.blue500, marginBottom: '-3px' }} /> <b>30 done</b> this month
                    </>}
                    style={{ fontSize: '10px', fontWeight: 'normal' }} />
            </Grid>
            <Grid item>
                <IconButton><MoreVertIcon fontSize="small" /></IconButton>
            </Grid>
        </Grid>
    )
};

export default Header;