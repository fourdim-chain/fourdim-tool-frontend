import * as React from "react";
import { useAccount, useConnect } from "wagmi";
import { Button, ButtonProps, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

interface AuthButtonProps extends ButtonProps { }

const AuthButton: React.FunctionComponent<AuthButtonProps> = (props) => {
    const [
        { data: connectData, error: connectError, loading: connectLoading },
        connect
    ] = useConnect();
    const [accountQuery, disconnect] = useAccount();
    const [isOpen, setOpen] = useState<null | HTMLElement>(null);

    const handleClose = () => {
        setOpen(null);
    };

    const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setOpen(event.currentTarget);
    };

    const handleConnect = (x: any) => {
        connect(x)
        handleClose()
    }

    React.useEffect(() => {
        if (connectError?.name === 'ConnectorNotFoundError') {
            console.error("MetaMask extension required to sign in");
        }
    }, [connectError])

    if (!connectData?.connected) {
        return (
           <>
               <Button
                   {...props}
                   onClick={handleOpen}
               >
                   Connect Wallet
               </Button>
               <Menu
                   keepMounted
                   anchorEl={isOpen}
                   onClose={handleClose}
                   open={Boolean(isOpen)}
               >
                   {connectData.connectors.map((x) => (
                       <MenuItem disabled={!x.ready} key={x.name} onClick={() => handleConnect(x)}>
                           {x.name}
                           {!x.ready && " (unsupported)"}
                           {connectLoading && x.name === connectData.connector?.name && "…"}
                       </MenuItem>
                   ))}
               </Menu>
           </>
        );
    }

    return <Button {...props} onClick={disconnect}>Discount</Button>;
}

export default AuthButton;