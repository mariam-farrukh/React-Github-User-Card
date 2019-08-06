import React from 'react';

export default class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="card">
                <img
                    width="300"
                    src = {this.props.user.avatar_url}
                    alt = "User Image"
                />
                <div>
                    <h2>{this.props.user.name}</h2>
                    <p>Username: {this.props.user.login}</p>
                    <p>Location: {this.props.user.location}</p>
                    <p>Bio: {this.props.user.bio}</p>
                </div>
            </div>
        );
    }
}