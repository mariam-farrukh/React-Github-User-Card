import React from 'react';

export default class UserFollowers extends React.Component{
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="card">
                <img 
                    width="200"
                    src = {this.props.follower.avatar_url}
                    alt = "Follower Image"
                />
                <div>
                    <p>Username: {this.props.follower.login}</p>
                </div>
            </div>
        )
    }
}