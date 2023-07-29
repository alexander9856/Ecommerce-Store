import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { Box } from '@chakra-ui/react';

export const RatingStars = ({ rating }) => {
    const roundedRating = Math.round(rating * 2) / 2;

    const renderStar = (index) => {
        if (roundedRating - index >= 1) {
            return <BsStarFill key={index} style={{ marginLeft: '1' }} size='13' color="teal.500" />;
        } else if (roundedRating - index === 0.5) {
            return <BsStarHalf key={index} style={{ marginLeft: '1' }} size='13' />;
        } else {
            return <BsStar key={index} style={{ marginLeft: '1' }} size='13' />;
        }
    };

    return (
        <Box display="flex" alignItems="center">
            {Array(5).fill('').map((_, i) => renderStar(i))}
        </Box>
    );
}