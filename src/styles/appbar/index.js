import { styled } from "@mui/material/styles";
import { Box, List, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import "@fontsource/montez";
import { Colors } from "../theme";

// appbar container
export const AppbarContainer = styled(Box)(() => ({
    display: "flex",
    marginTop: 4,
    justifyContent: "center",
    alignItems: "center",
    padding: "2px 8px"
}))

// appbar container
export const AppbarHeader = styled(Typography)(() => ({
    padding: 0.5,
    flexGrow: 1,
    fontSize: '4rem',
    // fontFamily: '"Montez","cursive"',
    fontFamily: "'Josefin Sans', sans-serif",
    color: Colors.secondary
}));

// appbar list
export const AppbarList = styled(List)(({ type }) => ({
    display: type === "row" ? "flex" : "block",
    flexGrow: 3,
    justifyContent: "center",
    alignItems: "center",
}));

// appbar list item button
export const ActionsListItemButton = styled(ListItemButton)(() => ({
    justifyContent: "center",
}));

// appbar list item icon
export const ActionsListItemIcon = styled(ListItemIcon)(({ matches }) => ({
    display: 'flex',
    justifyContent: "center",
    color: matches && Colors.secondary
}));

// appbar action icons container mobile
export const ActionIconsContainerMobile = styled(Box)(() => ({
    display: 'flex',
    background: Colors.shaft,
    position: "fixed",
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 99,
    borderTop: `1px solid ${Colors.border}`
}));

// appbar action icons container desktop
export const ActionIconsContainerDesktop = styled(Box)(() => ({
    flexGrow: 0,
}));
