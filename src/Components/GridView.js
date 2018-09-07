import React from 'react';
import '../Styles/GridView.css'
import { Link } from 'react-router-dom'
import tools from '../common/tools'
import Header from "./Header";

export default (props) => {
    console.log(props);
    if (tools.has(['data', 'cakes'], props)) {
        const cakes = props.data.cakes.map((cake) => {
            const linkData = {
                pathname: '/active',
                state: { cake }
            };

            return (
                <div key={ cake.id } className={'item'}>
                    <Link to={ linkData }>
                        <img src={ cake.thumb } alt={ cake.name } />
                    </Link>
                    <div className='props'>
                        <h1 className='row'>{ cake.name }</h1>
                        <h2> { cake.description } </h2>
                        <h1 className='row'> {`Price: ${ cake.price }`} </h1>
                        <div className='buttons'>
                            <button><h2>Add to Basket</h2></button>
                            <button className='remove-button'>remove from Basket</button>
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <div>
                <Header title={props.data.title}/>
               { cakes }
            </div>
        )
    }
    else {
        const message = props.isFetch ? <h1 className='error'>No Data</h1> : '';
        return <div>{message}</div>
    }
};