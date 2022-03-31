import React, { useState } from "react";
import { Button, Menu, MenuItem, Stack } from "@mui/material";
import { useConnect, useNetwork } from "wagmi";
import AuthButton from "./AuthButton";


const AuthLogin: React.FC = () => {
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
        <Stack direction="row">
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
            <AuthButton/>
        </Stack>
    )
}

export default AuthLogin;