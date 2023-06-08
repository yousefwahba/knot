import { useEffect, useState } from 'react';
import axios from 'axios';
import UserTable from '../components/dashboard/UserTable';

const Dashboard = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/user').then((response) => {
      setAllUsers(response.data);
    });
  }, []);

  return (
    <>
      <UserTable data={allUsers} />
    </>
  );
};

export default Dashboard;
