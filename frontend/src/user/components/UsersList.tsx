import Card from '../../shared/components/UIElements/Card';
import UserItem from './UserItem'
import './UsersList.css'

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
            <Card className={''} style={{}}>
                <h2>No users found.</h2>
            </Card>
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
