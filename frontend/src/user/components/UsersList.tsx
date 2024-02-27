import './UsersList.css'
import UserItem from './UserItem'

interface User {
    id: string;
    image: string;
    name: string;
    places: number;
}

interface UsersListProps {
    items: User[];
}

const UsersList = (props: UsersListProps) => {

    if(props.items.length === 0){
        return <div className="center">
            <h2>No users found.</h2>
        </div>
    }
  return (
    <ul className='users-list'>
        {props.items.map(user => (
            <UserItem 
                key={user.id} 
                id={user.id} 
                image={user.image} 
                name={user.name} 
                placeCount={user.places}
            />
        ))}
    </ul>
  )
}
export default UsersList
