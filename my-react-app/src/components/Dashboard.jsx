import React from "react";
import UserProfile from "./UserProfile"
import UserStats from "./UserStats"

export default function Dashboard() {
    return (
        <div>
            <UserProfile />
            <UserStats />
        </div>
    );
}