import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend.name)

    return (
        <div>
            <h1>Details About: {friend.name}</h1>
            <h2>Phone: {friend.phone}</h2>
        </div>
    );
};

export default FriendDetails;