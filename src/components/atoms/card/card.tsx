import React, {FC} from 'react';
import "./card.scss"

interface CardProps {
    image: string;
}
const Card: FC<CardProps> = ({image}) => {
    return (
        <div className="card">
            <img src={image}/>
        </div>
    );
};

export default Card;
