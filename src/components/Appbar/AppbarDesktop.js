import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, AppbarList } from "../../styles/appbar";
import SearchIcon from '@mui/icons-material/Search';
import Actions from "./actions";

const AppbarDesktop = ({ matches }) => {
    return (
        <AppbarContainer>
            <AppbarHeader>Alpha</AppbarHeader>
            <AppbarList type='row'>
                <ListItemText primary='Home' />
                <ListItemText primary='Categories' />
                <ListItemText primary='Products' />
                <ListItemText primary='Contact Us' />
                <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                </ListItemButton>
            </AppbarList>
            <Actions />
        </AppbarContainer>
    );
}

export default AppbarDesktop;