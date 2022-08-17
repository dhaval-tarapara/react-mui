import { IconButton, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, AppbarList } from "../../styles/appbar";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Actions from "./actions";


const AppbarMobile = ({ matches }) => {
    return (
        <>
            <AppbarContainer>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <AppbarHeader textAlign='center' variant='h4'>
                    Alpha
                </AppbarHeader>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <Actions matches={matches} />
            </AppbarContainer>
        </>
        // list 
    );
}

export default AppbarMobile;