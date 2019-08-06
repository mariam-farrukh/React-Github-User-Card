import React from 'react';
import axios from 'axios';

export default class Data extends React.Component {
    constructor() {
        super();
        this.state = {
            userData: ""
        };
    }

    componentDidMount() {
        const userData = axios.get("https://github.com/users/mariam-farrukh")
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
