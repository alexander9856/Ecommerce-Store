import { Box } from '@chakra-ui/react';
import { Star } from './Star';

export const RatingStars = ({ rating }) => {
    const roundedRating = Math.round(rating * 2) / 2;
    return (
        <Box display="flex" alignItems="center">
            {Array(5).fill('').map((_, i) => <Star rating={roundedRating} index={i} key={i} />)}
        </Box>
    );
}