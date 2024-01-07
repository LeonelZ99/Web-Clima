export const userList = ({ endpoint }) => {
    return (
        <ul>
            {users.map(user => <li key={user.id}>Nombre: {user.name} </li>)}
        </ul>
    )
}
