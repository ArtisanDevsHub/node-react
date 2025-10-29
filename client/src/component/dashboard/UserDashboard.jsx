import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import isAuthenticated from '../../utils/authValidator'

function UserDashboard() {
  const [error, setError] = useState(undefined);
  const [user, setUser] = useState({
    id: "",
    address: "",
    email: "",
    phoneNumber: "",
    username: "",
  });

  const navigate = useNavigate();
  
  useEffect(() => {
    let userDetails = async () => {
      const isLoggedIn = await isAuthenticated()
      if(!isLoggedIn) navigate('/');

      try {
        const response = await getUserData();
        setUser((prev) => ({
          ...prev,
          username: response.data.username,
          email: response.data.email,
          id: response.data.id,
          phoneNumber: response.data.phoneNumber,
          address: response.data.address,
        }));
      } catch (error) {
        console.log(error);
      }
    };
    userDetails();
  }, []);

  const getUserData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/users/user-dashboard",
        {
          withCredentials: true,
        }
      );
      return response;
    } catch (e) {
      if (e.response && e.response.data.error) {
        setError(e.response.data.error);
      } else {
        setError(e.message);
      }
    }
  };


  async function handleLogout() {
    const response = await axios.post(
      "http://localhost:3000/users/user-logout",
      {},
      {
        withCredentials: true,
      }
    );
    navigate("/");
  }

  return (
    <div>
      <div className="max-w-md mx-auto mt-10 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          User Profile
        </h2>
        <div className="mb-2">
          <span className="font-medium text-gray-700">Username:</span>
          <span className="ml-2 text-gray-900">{user.username}</span>
        </div>
        <div className="mb-2">
          <span className="font-medium text-gray-700">Email:</span>
          <span className="ml-2 text-gray-900">{user.email}</span>
        </div>
        <div className="mb-2">
          <span className="font-medium text-gray-700">Phone:</span>
          <span className="ml-2 text-gray-900">{user.phoneNumber}</span>
        </div>
        <div className="mb-2">
          <span className="font-medium text-gray-700">Phone:</span>
          <span className="ml-2 text-gray-900">{user.email}</span>
        </div>
        <div className="mb-2">
          <span className="font-medium text-gray-700">Phone:</span>
          <span className="ml-2 text-gray-900">{user.address}</span>
        </div>
      </div>

      <button className="mt-4" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserDashboard;
