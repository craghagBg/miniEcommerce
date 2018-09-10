import React, {Component} from 'react';
import './App.css';
import GridView from "./Components/GridView";
import Basket from "./Components/Basket";
import { Route, Switch } from 'react-router-dom'
import action from './Actions/actions'
import store from './Stores/store'

class App extends Component {

    constructor (props) {
        super(props);

        console.log(props);
        console.log(props.history);
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

    render() {
        return (
            <Switch>
                <Route path= '/basket' component={() =>
                    <Basket
                        data={ this.state.data }
                        isFetch={ this.state.isFetch }
                        add={ this.add.bind(this) }
                        remove={ this.remove.bind(this) }
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
            </Switch>
        )
    }
}

export default App;
