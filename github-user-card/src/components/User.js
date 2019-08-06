import React from 'react';

export default class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="userCard">
                <img
                    src = {this.props.user.avatart_url}
                    alt = "User Image"
                />
                <div>
                    <h2>{this.props.user.login}</h2>
                    <p>{this.props.user.bio}</p>
                </div>
            </div>
        );
    }
}