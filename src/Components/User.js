import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <table border="1">
   
    
          <tr>
            <td> {user.name}</td>
            <td>{user.username}</td>
          </tr>
        
      </table>
    </div>
  );
};

export default User;
