import React, {Component} from 'react';
import './App.css';
import GridView from "./Components/GridView";
import Basket from "./Components/Basket";
import { Route, Switch, Redirect } from 'react-router-dom'
import action from './Actions/actions'
import store from './Stores/store'

class App extends Component {

    constructor (props) {
        super(props);

        this.state = {
            data: {},
            isFetch: false
        };

        this.onChange = this.onChange.bind(this);
        store.on('change', this.onChange);
    }

    onChange (data) {
        this.setState({
            data,
            isFetch: true
        })
    }

    componentDidMount() {
        action.fetchData();
    }

    componentWillUnmount() {
        store.removeListener('change', this.onChange);
    }

    add (id) {
        action.add(id);
    }

    remove (id) {
        action.remove(id);
    }

    confirm () {
        const items = [];
        this.state.data.cakes.map((item) => {
            if (item.quantity > 0) {
                items.push({
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity
                })
            }
        });

        fetch('/server', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data: items })
        })
        .then(function(res){ console.log(res) })
        .catch(function(res){ console.log(res) })
    }

    render() {
        return (
            <Switch>
                <Route path= '/basket' component={() =>
                    <Basket
                        data={ this.state.data }
                        isFetch={ this.state.isFetch }
                        add={ this.add.bind(this) }
                        remove={ this.remove.bind(this) }
                        confirm={ this.confirm.bind(this) }
                     />}
                />
                <Route path='/' component={() =>
                    <GridView
                        data={ this.state.data }
                        isFetch={ this.state.isFetch }
                        add={ this.add.bind(this) }
                        remove={ this.remove.bind(this) }
                    />}
                />
                <Redirect from='*' to='/' />
            </Switch>
        )
    }
}

export default App;
