import React from 'react';
import { Card, Image } from "./StyledComponents";

export default class UserFollowers extends React.Component{
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Card>
                <Image 
                    src = {this.props.follower.avatar_url}
                    alt = "Follower Image"
                />
                <div>
                    <p>Username: {this.props.follower.login}</p>
                </div>
            </Card>
        )
    }
}