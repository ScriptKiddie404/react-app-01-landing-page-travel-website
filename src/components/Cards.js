import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

import imagen1 from '../images/image-amazonas.jpg';
import imagen2 from '../images/image-desert.jpg';
import imagen3 from '../images/image-antarctica.jpg';
import imagen4 from '../images/image-norway.jpg';
import imagen5 from '../images/image-aurora.jpg';
import imagen6 from '../images/image-newzeland.jpg';

function Cards() {
    return (
        <div className='cards'>
            <h1>The Best Adventures and Experiences!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={imagen1}
                            text='Explore the Amazonas and be ready for the adventure!'
                            label='Amazonas'
                            path='/services'
                        />
                        <CardItem
                            src={imagen2}
                            text=''
                            label='Sahara'
                            path='/services'
                        />
                        <CardItem
                            src={imagen2}
                            text=''
                            label='Sahara'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={imagen3}
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Antarctica'
                            path='/services'
                        />
                        <CardItem
                            src={imagen4}
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Norway'
                            path='/products'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={imagen5}
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Northern Lights'
                            path='/services'
                        />
                        <CardItem
                            src={imagen6}
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='New Zealand'
                            path='/products'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
