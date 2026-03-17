import { useState } from "react";
import useAuthStore from "../../store/useAuthStore";

function UpdateUser() {
  const { users, getUsersData } = useAuthStore();
  const [userId, setUserId] = useState("");
  const [userUpdateData, setUserUpdateData] = useState({
    username: "",
    password: "",
    email: "",
    user_type: "",
  });

  function handleChange(e) {
    setUserId(e.target.value);
  }
  async function handleChangeUpdate(e) {
    const { name, value } = e.target;
    await getUsersData();
    setUserUpdateData((prevUserIdUpdate) => ({
      ...prevUserIdUpdate,
      [name]: value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    await getUsersData("/api/auth/register/allUsers", "GET");
    setUserUpdateData(users.data.filter((user) => user.id === userId));
    alert("The user updated successfully");
  }

  return (
    <div>
      <h2>UpdateUser</h2>
      <form onSubmit={handleSubmit}>
        <label>Search By Id</label>
        <input type="text" name="" value={userId} onChange={handleChange} />
        <button>Search</button>
      </form>

      {userUpdateData && (
        <form onSubmit={handleSubmit}>
          <label>User name</label>
          <input
            type="text"
            name="username"
            value={userUpdateData.username}
            onChange={handleChangeUpdate}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={userUpdateData.password}
            onChange={handleChangeUpdate}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={userUpdateData.email}
            placeholder="example@.com"
            onChange={handleChangeUpdate}
          />
          <label>User Type</label>
          <input
            type="text"
            name="user_type"
            value={userUpdateData.user_type}
            onChange={handleChangeUpdate}
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default UpdateUser;
