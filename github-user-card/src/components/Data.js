import React from 'react';
import axios from 'axios';
import User from './User.js'

export default class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: ""
        };
    }

    componentDidMount() {
        const userData = axios.get("https://api.github.com/users/mariam-farrukh", {})
        .then(res => {
            this.setState({userData: res.data});
        })
        .catch(err => {
            console.log('Error with axios in CDM', err);
        });
    }

    render() {
        return (
            <div>
                <User user={this.state.userData}/>
            </div>
        )
    }
}
