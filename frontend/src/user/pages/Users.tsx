import UsersList from "../components/UsersList";
const Users = () => {

    const USERS = [
        {
            id: 'u1',
            name: 'Max Schwarz',
            image: 'https://avatars.githubusercontent.com/u/1?v=4',
            places: 3
        }
    ]
    return <UsersList items={USERS} />;
};

export default Users;
