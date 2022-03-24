import * as React from "react";
import { useAccount, useConnect } from "wagmi";
import {Button, ButtonProps} from "@mui/material";

interface AuthButtonProps extends ButtonProps { }

const AuthButton: React.FunctionComponent<AuthButtonProps> = (props) => {
    const [connectQuery, connect] = useConnect();
    const [accountQuery] = useAccount();

    React.useEffect(() => {
        if (connectQuery.error?.name === 'ConnectorNotFoundError') {
            console.error("MetaMask extension required to sign in");
        }
    }, [connectQuery.error])

    if (!accountQuery.data?.address) {
        return (
            <Button
                {...props}
                onClick={() => {
                    connect(connectQuery.data.connectors[0]);
                }}
            >
                Sign In
            </Button>
        );
    }

    return <Button {...props}>{props.children}</Button>;
}

export default AuthButton;