import React from 'react'

import { Card as BCard } from 'react-bootstrap'


const Card = (props) => {
    const { title, desc, photo } = props;

    return (
        <BCard className='col-4'>
            <BCard.Img variant="top" src={photo} />
            <BCard.Body>
                <BCard.Title>{title}</BCard.Title>
                <BCard.Text>{desc}</BCard.Text>
            </BCard.Body>
        </BCard>    
        





            );       
}

            export default Card;