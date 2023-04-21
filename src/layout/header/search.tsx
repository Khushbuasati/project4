import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.grey[200]}`,
    paddingLeft: '1rem',
    backgroundColor: alpha(theme.palette.background.paper, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.background.paper, 0.25),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: theme.palette.primary.light,
    fontSize: '10px',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const SearchRoot = () => {

    return (
        <Search>
            <StyledInputBase
                placeholder="Search here"
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
    );
}
export default SearchRoot;