import React from "react";

import { styled } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, Container, Typography } from '@mui/material';
import { HEADER } from "../../config/constants";
import Logo from "../../components/Logo";
import AuthLogin from "../../components/AuthLogin";


const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    height: HEADER.MOBILE_HEIGHT,
    [theme.breakpoints.up('md')]: {
        height: HEADER.MAIN_DESKTOP_HEIGHT,
    },
}));

const Title = styled(Typography)(() => ({
    marginLeft: 10,
}))

const Header: React.FC = () => (
    <AppBar sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        position: 'absolute'
    }}>
        <ToolbarStyle disableGutters>
            <Container
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Logo />

                <Title variant="h4">Fourdim Tool</Title>

                <Box sx={{ flexGrow: 1 }} />

                <AuthLogin />
            </Container>
        </ToolbarStyle>
    </AppBar>
)

export default Header;