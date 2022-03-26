import React, { useState } from "react";
import Page from "../../components/Page";
import { styled } from '@mui/material/styles';
import AuthButton from "../../components/AuthButton";
import { Button, Menu, MenuItem } from "@mui/material";
import { useConnect, useNetwork } from "wagmi";

const RootStyle = styled('div')(({ theme }) => ({
    height: '100%',
}));

const ContentStyle = styled('div')(({ theme }) => ({
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: theme.palette.background.default,
}));

const Home: React.FC = () => {
    const [{ data: connectData }, connect] = useConnect();
    const [{ data: networkData }, switchNetwork] = useNetwork();
    const [isOpen, setOpen] = useState<null | HTMLElement>(null);

    const handleClose = () => {
        setOpen(null);
    };

    const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setOpen(event.currentTarget);
    };

    const handleConnect = (x: any) => {
        switchNetwork && switchNetwork(x.id)
        handleClose()
    }

    return (
        <Page title="The starting point for your next project">
            <RootStyle>
                <ContentStyle>
                    {connectData?.connected && (
                        <Button variant="outlined" onClick={handleOpen}>
                            <div>
                                Connected to {networkData.chain?.name ?? networkData.chain?.id}{" "}
                                {networkData.chain?.unsupported && "(unsupported)"}
                            </div>
                        </Button>
                    )}
                    <Menu
                        keepMounted
                        anchorEl={isOpen}
                        onClose={handleClose}
                        open={Boolean(isOpen)}
                    >
                        {
                            switchNetwork &&
                            networkData.chains.map((x) =>
                                x.id === networkData.chain?.id ? null : (
                                    <MenuItem key={x.id} onClick={() => handleConnect(x)}>
                                        Switch to {x.name}
                                    </MenuItem>
                                )
                            )
                        }
                    </Menu>
                    <AuthButton />
                </ContentStyle>
            </RootStyle>
        </Page>
    )
}

export default Home;