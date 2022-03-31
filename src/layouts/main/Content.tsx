import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { HEADER } from "../../config/constants";
import Search from "../../components/Search";
import PopularTool from "./tool/PopularTool";

const ContentStyle = styled('div')(({ theme }) => ({
    paddingTop: HEADER.MOBILE_HEIGHT,
    [theme.breakpoints.up('md')]: {
        paddingTop: HEADER.MAIN_DESKTOP_HEIGHT,
    },
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    width: '100%'
}))

const Content: React.FC = () => {
    console.log(11)

    return (
        <ContentStyle>
            <Search/>

            <PopularTool />

            {/*<Typography ></Typography>*/}
        </ContentStyle>
    )
}

export default Content;