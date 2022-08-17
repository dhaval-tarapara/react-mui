import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from '../../styles/banner';
let HeaderImg = 'https://cdn.pixabay.com/photo/2015/12/06/20/10/christmas-bauble-1079926_960_720.jpg';
const Banner = () => {
    const theme = useTheme();
    const isSmallDevice = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <BannerContainer src={HeaderImg}>
            <BannerContent>
                <Typography variant='h6'>Huge Collection</Typography>
                <BannerTitle variant='h2'>New Bags</BannerTitle>
                <BannerDescription variant='subtitle1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sit sequi rem incidunt, ipsum corporis aliquid maxime voluptatibus ut eligendi, et nobis ipsa, velit commodi. Consequuntur natus nisi deleniti, a esse repellendus?
                </BannerDescription>
            </BannerContent>
        </BannerContainer>
    );
}

export default Banner;