import React from 'react';
import '../Styles/Header.css'
import { Link } from 'react-router-dom'

export default (props) => (
    <div className='App-Header'>
        {props.data.title}
        <Link to={ {pathname: '/basket', state: props.data} }>
            <img src= 'http://infoling.org/infoling2/img/colorful-stickers-part-3-icons-set/png/256x256/add_to_shopping_cart.png' alt='basket' className='basket'/>
        </Link>
    </div>
)
