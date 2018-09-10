import React from 'react';
import '../Styles/Basket.css'
import tools from '../common/tools'
import Header from './Header'

export default (props) => {
    const items = [];
    if (tools.has(['data', 'cakes'], props)) {
        props.data.cakes.map((item) => {
            if (item.quantity > 0) {
                items.push(
                    <li key={item.id} className='basket-item'>
                        <div>{ item.name }</div>
                        <div>{ item.price }</div>
                        <div className='quantity'>
                            <button className='quantity-button' onClick={() => props.remove(item.id)}>-</button>
                            { item.quantity }
                            <button className='quantity-button' onClick={() => props.add(item.id)}>+</button>
                            </div>
                        <div>{ parseInt(item.quantity) * parseInt(item.price) }$</div>
                    </li>
                )
            }
        });
    }

    return (
        <div>
            <Header data={props.data}/>
            <div className='wrapper'>
                <ul>
                    <li className='basket-item'>
                        <div>Name</div>
                        <div>Single unit price</div>
                        <div>Quantity</div>
                        <div>Total price</div>
                    </li>
                    { items.length > 0 ? items : <h1 className='empty-basket'>Empty Basket</h1> }
                </ul>
                <button
                    className='confirm'
                    disabled={items.length < 1}
                    onClick={ props.confirm }>
                    Confirm Order
                </button>
            </div>
        </div>
    )

}

