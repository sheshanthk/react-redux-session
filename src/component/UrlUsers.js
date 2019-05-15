import React, { Component } from 'react'
import UserCard from './UserCard';

class UrlUsers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            hasError: false
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users', {
            'method': 'GET',
            'content-type': 'application/json'
        })
            .then(res => res.json())
            .then(res => {
                //console.table(res);
                this.setState({
                    users: res.slice(0, 5)
                })
            })
            .catch(error => {
                console.log("Error accessing the GET api for Users ", error)
                this.setState({
                    hasError: true
                })
            })
    }

    render() {
        return (
            <UserCard users={this.state.users} />
        )
    }
}

export default UrlUsers