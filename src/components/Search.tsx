import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";


const NoBorderInput = styled(TextField, {
    shouldForwardProp: (prop) => prop !== 'stretchStart',
})(({ theme }) => ({
    '& fieldset': {
        borderWidth: `0 !important`
    },
}))

const InputLeftBorder = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    width: 4,
    height: 56,
    borderRadius: 2,
    position: "absolute",
    left: 0,
}))

const Search: React.FC = () => {
    console.log(111)

    return (
        <Box position="relative">
            <InputLeftBorder />
            <NoBorderInput placeholder="Search" />
        </Box>
    )
}

export default Search;