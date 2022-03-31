import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
    disabledLink?: boolean;
}

export default function Logo({ disabledLink = false, sx }: Props) {
    const theme = useTheme();
    const PRIMARY_LIGHT = theme.palette.primary.light;

    const logo = (
        <Box sx={{ width: 25, height: 25, ...sx }}>
            <svg width="100%" height="100%" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="4.34954" cy="4.28997" rx="4.28997" ry="4.28997" fill={PRIMARY_LIGHT}/>
                <ellipse cx="4.34954" cy="21.4499" rx="4.28997" ry="4.28997" fill={PRIMARY_LIGHT}/>
                <ellipse cx="22.9394" cy="4.28997" rx="4.28997" ry="4.28997" fill={PRIMARY_LIGHT}/>
                <ellipse cx="22.9394" cy="21.4499" rx="4.28997" ry="4.28997" fill={PRIMARY_LIGHT}/>
            </svg>
        </Box>
    );

    if (disabledLink) {
        return <>{logo}</>;
    }

    return <RouterLink to="/">{logo}</RouterLink>;
}
