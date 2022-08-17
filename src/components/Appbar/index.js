import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Fragment } from 'react';
import AppbarDesktop from './AppbarDesktop';
import AppbarMobile from './AppbarMobile';
const Appbar = () => {
    const theme = useTheme();
    const isSmallDevice = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Fragment>
            {isSmallDevice ? <AppbarMobile matches={isSmallDevice} /> : <AppbarDesktop matches={isSmallDevice} />}
        </Fragment>
    );
}

export default Appbar;