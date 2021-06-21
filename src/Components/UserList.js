import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import User from './User';

const UserList = () => {
    const [users, setUsers] = useState([]); // where to store the returned data
    const [error, setError] = useState(null); // where to store the coming errors
    useEffect(() => {
      function fetchData() {
        // the function to fetch data from the api
        axios.get("https://jsonplaceholder.typicode.com/users")
          .then(res => setUsers(res.data))
          .catch(err => setError(err));
        };
   
      fetchData();
    }, []);
 
    return (
      <div>
      <h2>List of Users</h2>
          {users.map(user => (
            <User user={user}/>
           ))}
        
      </div>
    );
}

export default UserList
