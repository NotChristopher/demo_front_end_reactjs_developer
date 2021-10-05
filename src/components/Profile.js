import * as React from 'react';
import Avatar from '@mui/material/Avatar';


function Profile() {
  return (
    <div className = "Profile-View">
        <div className = "Banner">

        </div>
        <div className = "Content-container">
        <div className = "Icon">
        <Avatar sx={{ width: 100, height: 100 }} alt="C" src="/static/images/avatar/5.jpg" />
        </div>
        <div className = "UserName">
            <h2>UserName</h2>
        </div>
        </div>
        
    </div>
  );
}
export default Profile;