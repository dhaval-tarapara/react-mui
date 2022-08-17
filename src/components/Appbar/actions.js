import { ActionIconsContainerDesktop, ActionIconsContainerMobile, ActionsListItemButton, ActionsListItemIcon, AppbarList } from "../../styles/appbar";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import Divider from '@mui/material/Divider';


const Actions = ({ matches }) => {

    const Container = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;

    return (
        <Container>
            <AppbarList type="row">
                <ActionsListItemButton>
                    <ActionsListItemIcon matches={matches}>
                        <ShoppingCartIcon />
                    </ActionsListItemIcon>
                </ActionsListItemButton>
                <Divider orientation="vertical" sx={{ borderColor: '#dedede' }} flexItem />
                <ActionsListItemButton>
                    <ActionsListItemIcon matches={matches}>
                        <FavoriteIcon />
                    </ActionsListItemIcon>
                </ActionsListItemButton>
                <Divider orientation="vertical" sx={{ borderColor: '#dedede' }} flexItem />
                <ActionsListItemButton>
                    <ActionsListItemIcon matches={matches}>
                        <PersonIcon />
                    </ActionsListItemIcon>
                </ActionsListItemButton>
            </AppbarList>
        </Container>
    );
}

export default Actions;