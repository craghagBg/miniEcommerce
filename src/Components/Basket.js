import React from 'react';
import '../Styles/Basket.css'
import tools from '../common/tools'

export default (props) => {
    const items = tools.has(['data', 'cakes'], props) ? props.data.cakes.map((item) => {
        if (item.basket > 0) {
            return (
                <li key={item.id} className='basket-item'>
                    <div>{ item.name }</div>
                    <div>{ item.price }</div>
                    <div>{ item.basket }</div>
                    <div>{ parseInt(item.basket) * parseInt(item.price) }$</div>
                </li>
            )
        }
    }) : <h1>Empty Basket</h1>;
    return (
        <div className='wrapper'>
            <ul>
                <li className='basket-item'>
                    <div>Name</div>
                    <div>Single unit price</div>
                    <div>Quantity</div>
                    <div>Total price</div>
                </li>
                { items ||  <h1>Empty Basket</h1> }
            </ul>
            <button className='confirm'>Confirm Order</button>
        </div>
    )

}

