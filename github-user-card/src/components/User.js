import React from 'react';

export default class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="userCard">
                <img
                    width="200"
                    src = {this.props.user.avatar_url}
                    alt = "User Image"
                />
                <div>
                    <h2>{this.props.user.name}</h2>
                    <p>Location: {this.props.user.location}</p>
                    <p>Bio: {this.props.user.bio}</p>
                </div>
            </div>
        );
    }
}