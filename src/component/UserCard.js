import React from 'react'

export default function UserCard({ users }) {

    const usersCard = users.length ? (users.map(user => {
        return (
            <div className="card" key={user.id} >
                <div className="card-content">
                    <span className="card-title">{user.name}</span>
                    <p>{user.email}</p>
                </div>
            </div>
        )
    })) : (
            <div>No users to Display</div>
        )

    return (
        <div className="container">
            {usersCard}
        </div>
    )
}
