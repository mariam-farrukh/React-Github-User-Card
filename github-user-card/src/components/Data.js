import React from 'react';
import axios from 'axios';
import User from './User.js';
import UserFollowers from './UserFollowers.js';
import { Header3 } from "./StyledComponents";

export default class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: "",
            followersData: [""]
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
                <Header3>Followers:</Header3>
                {this.state.followersData.map(follower => (
                    <UserFollowers follower={follower} />
                ))}
            </div>
        );
    };
}
