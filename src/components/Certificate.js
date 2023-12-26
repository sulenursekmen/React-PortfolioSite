import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TerminalIcon from '@mui/icons-material/Terminal';
const certificatesData = [
    {
        id: 1,
        title: "Projelerle Flutter ile Android&Ios Geliştirme",
        description: "Udemy",
    },
    {
        id: 2,
        title: "Flutter ile Mobil Uygulama Geliştirme,",
        description: "Udemy",
    },
    {
        id: 3,
        title: "Adobe XD ile UI-UX Tasarımı",
        description: "BTK Akademi",
    },
    {
        id: 4,
        title: "Asp.Net Core MVC 101,202,303,404",
        description: "Turkcell Geleceği Yazanlar",
    },
];

function Certificate() {
    return (
        <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper', margin: 'auto' }}>
            {certificatesData.map((certificate) => (
                <React.Fragment key={certificate.id}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt={certificate.title} src={certificate.avatarSrc}>
                                <TerminalIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={certificate.title}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                     
                                    </Typography>
                                    {certificate.description}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </React.Fragment>
            ))}
        </List>
    );
}

export default Certificate;
