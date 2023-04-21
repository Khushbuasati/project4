import React from 'react';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Box } from '@mui/material';
import { list, headings } from '../../data/products';
import ProgressBar from './progressBar';
import Members from './membersList';
import { colors } from '../../assets/scss/colors';

const StyledTableHeader = styled(TableCell)(({ theme }) => ({
    fontSize: '10px',
    textTransform: 'uppercase',
    color: theme.palette.primary.light
}));

const StyledTableDatacell = styled(TableCell)(({ theme }) => ({
    fontSize: '10px',
    fontWeight: 'bold',
    color: theme.palette.primary.light
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: colors?.white2,
    },
}));

export default function ProductsList() {
    const theme = useTheme();
    return (
        <Paper sx={{ padding: '1rem 0rem', boxShadow: 'none' }}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {headings.map((item: string, index: number) => (
                            <StyledTableHeader align={index === headings.length - 1 ? "center" : "left"}>{item}</StyledTableHeader>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map((row: any) => (
                        <StyledTableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <StyledTableDatacell sx={{ color: theme.palette.primary.main }}>
                                <Box
                                    component="img"
                                    src={row.img}
                                    width="10%"
                                    style={{
                                        marginBottom: '-4px',
                                        marginRight: '0.4rem'
                                    }}
                                />
                                {row.name}
                            </StyledTableDatacell>
                            <StyledTableDatacell>
                                <Members list={row.members} />
                            </StyledTableDatacell>
                            <StyledTableDatacell>
                                {row.budget}
                            </StyledTableDatacell>
                            <TableCell align="center"><ProgressBar status={row.completion} /></TableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}