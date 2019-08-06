import React from 'react';
import axios from 'axios';
import User from './User.js';
import UserFollowers from './UserFollowers.js';

export default class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: "",
            followersData: ["Loading"]
        };
        
    };

    componentDidMount() {
        const userData = axios.get("https://api.github.com/users/mariam-farrukh", {})
        .then(res => {
            this.setState({userData: res.data});
        })
        .catch(err => {
            console.log('Error with axios in CDM', err);
        });

        const userFollowersData = axios.get("https://api.github.com/users/mariam-farrukh/followers")
        .then(res => {
            this.setState({followersData: res.data});
        })
        .catch(err => {
            console.log('Error with followers axios in CDM', err);
        });
    };

    render() {
        
        return (
            <div>
                <User user={this.state.userData}/>
                <h3>Followers:</h3>
                {this.state.followersData.map(follower => (
                    <UserFollowers follower={follower} />
                ))}
            </div>
        );
    };
}
