import { Box, Stack } from "@mui/material";
import React from "react";
import ToolParcel from "./ToolParcel";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(() => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: 20,
}))

const PopularTool: React.FC = () => {
    console.log(111)

    return (
       <RootStyle>
           <ToolParcel />
           <ToolParcel />
           <ToolParcel />
       </RootStyle>
    )
}

export default PopularTool;