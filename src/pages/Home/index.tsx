import React, { useState } from "react";
import Page from "../../components/Page";
import { styled } from '@mui/material/styles';

const RootStyle = styled('div')(({ theme }) => ({
    height: '100%',
}));

const ContentStyle = styled('div')(({ theme }) => ({
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: theme.palette.background.default,
}));

const Home: React.FC = () => (
        <Page title="The starting point for your next project">
            12121
        </Page>
    )

export default Home;