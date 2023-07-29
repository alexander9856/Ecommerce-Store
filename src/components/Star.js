import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
export const Star = ({ rating, index }) => {
    return (
        <>
            {rating - index >= 1 && <BsStarFill key={index} style={{ marginLeft: '1' }} size='13' color="#ffb600" />}
            {rating - index === 0.5 && <BsStarHalf key={index} style={{ marginLeft: '1' }} size='13' color="#ffb600" />}
            {rating - index < 0.5 && <BsStar key={index} style={{ marginLeft: '1' }} size='13' color="#ffb600" />}
        </>
    )
}