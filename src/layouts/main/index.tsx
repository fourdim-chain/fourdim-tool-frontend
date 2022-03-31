import { useLocation, Outlet } from 'react-router-dom';
import React from "react";
import Header from "./Header";
import { styled } from '@mui/material/styles';
import { m } from 'framer-motion';
import Content from "./Content";
import { Box, Stack, Toolbar } from "@mui/material";

const ToolContainer = styled(m.div)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    zIndex: theme.zIndex.appBar - 1,
    flex: 1,
    height: 'calc(100vh - 64px)',
    overflow: 'auto',
    marginTop: theme.spacing(4),
    marginRight: theme.spacing(2),
    borderRadius: 24,
    maxWidth: 680,
}));

const MainLayout: React.FC = () => {
    const { pathname } = useLocation();

    return (
        <Stack direction="row">
            <Box sx={{
                position: 'relative',
                flex: 1
            }}>
                <Header/>
                <Content/>
            </Box>
            <ToolContainer>
                <Outlet/>
            </ToolContainer>
        </Stack>
    )
}

export default MainLayout;