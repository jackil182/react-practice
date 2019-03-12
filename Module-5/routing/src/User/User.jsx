import React from 'react';

const User = ({userData}) => {
    return (
        <div>
            { Object.keys(userData).length 
            ? <div>
                <img className='avatar' src={userData.picture.medium} alt="" />
                <p className="name">{userData.name.first}</p>
                <p className="email">{userData.email}</p>
              </div> 
            : <p>Loading..</p> }
        </div>
    );
};

export default User;