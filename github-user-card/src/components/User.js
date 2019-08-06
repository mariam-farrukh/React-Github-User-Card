import React from 'react';
import { Card, Image } from "./StyledComponents";

export default class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Card>
                <Image
                    
                    src = {this.props.user.avatar_url}
                    alt = "User Image"
                />
                <div>
                    <h2>{this.props.user.name}</h2>
                    <p>Username: {this.props.user.login}</p>
                    <p>Location: {this.props.user.location}</p>
                    <p>Bio: {this.props.user.bio}</p>
                </div>
            </Card>
        );
    }
}