import { useEffect, useState } from "react";

export const UserApp = () => {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await resp.json();
            console.log(data)
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    }
    const handleFetch = () => {
        fetchUsers();
    }

    return (
        <>
            <h1>Lista de usuarios:</h1>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
            <button onClick={handleFetch}>Aca se llama a la api</button>
        </>
    )
}
