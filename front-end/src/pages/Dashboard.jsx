import { useEffect, useState } from 'react';
import axios from 'axios';
import UserTable from '../components/dashboard/UserTable';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:4000/user').then((response) => {
      setAllUsers(response.data);
    });
  }, []);

  return (
    <>
      <UserTable data={allUsers} />
      <button
        type="button"
        className="bg-primary hover:bg-orange-500 text-white font-bold py-2 px-3 m-3 my-8 rounded"
        onClick={() => navigate('/register')}
      >
        Add User
      </button>
    </>
  );
};

export default Dashboard;
