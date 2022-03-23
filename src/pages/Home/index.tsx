import React from "react";
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


const Home: React.FC = () => {

    return (
        <Page title="The starting point for your next project">
            <RootStyle>
                <ContentStyle>
                    Test
                </ContentStyle>
            </RootStyle>
        </Page>
    )
}

export default Home;