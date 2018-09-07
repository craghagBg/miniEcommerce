import React, {Component} from 'react';
import './App.css';
import GridView from "./Components/GridView";
import ActiveView from "./Components/Basket";
import { Route, Switch } from 'react-router-dom'
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

    onChange (event) {
        this.setState({
            data: event.data,
            isFetch: true
        })
    }

    componentDidMount() {
        action.fetchData();
    }

    componentWillUnmount() {
        store.removeListener('change', this.onChange);
    }

    render() {
        return (
            <Switch>
                <Route path= '/active' component={ ActiveView } />
                <Route path='/' component={() =>
                    <GridView
                        data={ this.state.data }
                        isFetch={ this.state.isFetch }
                    />}
                />
            </Switch>
        )
    }
}

export default App;
