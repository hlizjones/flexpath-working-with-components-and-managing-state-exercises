import React from "react";

export default function UserProfile(user) {
    return (
        <div>
            <h2>Name: {user.name}</h2>
            <p>Age: {user.age}</p>
        </div>
    )
}