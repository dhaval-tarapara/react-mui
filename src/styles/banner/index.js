import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export const BannerContainer = styled(Box)(({ src }) => ({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: "1rem 0px",
    backgroundImage: `url(${src})`,
    backgroundColor: "#cccccc"

}));

export const BannerContent = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "60%",
    padding: "30px 60px 0px",
    background: 'rgba(0,0,0,0.7)',
    color: '#fff',
    [theme.breakpoints.down("md")]: {
        padding: "10px 20px 0px",
        maxWidth: "80%"
    },
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
    lineHeight: 1.5,
    textAlign: "center",
    fontSize: "72px",
    marginBottom: "20px",
    [theme.breakpoints.down('sm')]: {
        fontSize: '42px',
    }
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: "3em",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
        lineHeight: 1.15,
        letterSpacing: 1.15,
        marginBottom: "1.5em",
    },
}));