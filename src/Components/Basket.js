import React, { Component } from 'react';
import '../Styles/ActiveView.css'
import tools from '../common/tools'

export default class ActiveView extends Component {
    constructor (props) {
        super(props);

        this.back = this.back.bind(this);
    }

    back (e) {
        if (!e.keyCode || e.keyCode === 27) {
            this.props.history.push('/');
        }
    }

    render () {
        return 'hello'
    }
}

