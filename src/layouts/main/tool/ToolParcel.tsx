import { Paper } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";


const ToolPaper = styled(Paper)(({ theme,  }) => ({
    width: 140,
    height: 140,
    textAlign: 'center',
}))

const ToolParcel: React.FC = () => {
    console.log(121)
    return (
        <ToolPaper>
            1212
        </ToolPaper>
    )
}

export default ToolParcel;