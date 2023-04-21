import React from 'react';
import { AvatarGroup, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface Props {
    list: string[];
}

const Members = ({ list = [] }: Props) => {
    const theme = useTheme();

    return (
        <AvatarGroup sx={{ justifyContent: 'flex-end' }}>
            {
                list.map((item: string) => (
                    <Avatar key={item} alt="R" src={item} sx={{ width: '17px', height: '17px' }} />
                ))
            }
        </AvatarGroup>
    );
};

export default Members;