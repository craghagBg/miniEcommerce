import React from 'react';
import '../Styles/GridView.css'
import tools from '../common/tools'
import Header from "./Header";
import { Link } from 'react-router-dom'

export default (props) => {
    if (tools.has(['data', 'cakes'], props)) {
        const items = props.data.cakes.map((item) => {
            return (
                <div key={ item.id } className={'item'}>
                    <img src={ item.thumb } alt={ item.name } className='grid-img'/>
                    <div className='props'>
                        <h1 className='row'>{ item.name }</h1>
                        <h2> { item.description } </h2>
                        <h1 className='row'> {`Price: ${ item.price }`} </h1>
                        <div>
                            <Link
                                to={ {pathname: '/basket', state: {data: props.data}} }
                                className='button'
                                onClick={ () => props.add(item.id) }>
                                Add to Basket
                            </Link>
                            <button
                                onClick={ () => props.remove(item.id) }
                                id='remove'
                                className={ item.quantity > 0 ? 'button' : 'button hidden' }>
                                Remove from Basket
                            </button>
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <div>
                <Header data={props.data}/>
               { items }
            </div>
        )
    }
    else {
        const message = props.isFetch ? <h1 className='error'>No Data</h1> : '';
        return <div>{ message }</div>
    }
};