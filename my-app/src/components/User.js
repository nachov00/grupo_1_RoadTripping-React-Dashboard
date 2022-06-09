import React, { useEffect, useState } from "react";
import '../Styles.css'




const User = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3030/api/users")            
        .then(res => res.json())
        .then(data => {           
            const userData = {
                total: data.meta.count
            }
            setUser(userData);
        });
},[]);

    return (
      <div>
        <div>
          {user ? (
            <p className="users">
              {"Cantidad total de usuarios: " + user.total}
            </p>
          ) : null}
        </div>
      </div>
    );
}


export default User;