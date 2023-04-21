import React from 'react';
import Paper from '@mui/material/Paper';

import Header from './header';
import ProductsList from './projectList';

const Projects = () => {
    return (
        <Paper elevation={3}>
            <Header />
            <ProductsList />
        </Paper>
    );
}
export default Projects;