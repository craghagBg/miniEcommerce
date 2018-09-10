import React from 'react';
import '../Styles/GridView.css'
import tools from '../common/tools'
import Header from "./Header";
import { Link } from 'react-router-dom'

export default (props) => {
    if (tools.has(['data', 'cakes'], props)) {
        const cakes = props.data.cakes.map((cake) => {
            return (
                <div key={ cake.id } className={'item'}>
                    <img src={ cake.thumb } alt={ cake.name } className='grid-img'/>
                    <div className='props'>
                        <h1 className='row'>{ cake.name }</h1>
                        <h2> { cake.description } </h2>
                        <h1 className='row'> {`Price: ${ cake.price }`} </h1>
                        <div>
                            <Link
                                to={ {pathname: '/basket', state: {data: props.data}} }
                                className='button'
                                onClick={ () => props.add(cake.id) }>
                                Add to Basket
                            </Link>
                            <button
                                onClick={ () => props.remove(cake.id) }
                                id='remove'
                                className={ cake.basket > 0 ? 'button' : 'button hidden' }>
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
               { cakes }
            </div>
        )
    }
    else {
        const message = props.isFetch ? <h1 className='error'>No Data</h1> : '';
        return <div>{message}</div>
    }
};