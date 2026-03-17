import { useEffect } from "react";
import Table from "../../components/Table";
import useAuthStore from "../../store/useAuthStore";
import { apiRequestresWithoutBody } from "../../api/usersApiRequest";
import { useState } from "react";

function AllUsers() {
    const {users, getUsersData} = useAuthStore();

    useEffect(() => {
        async function getData() {
          await getUsersData('/api/auth/register/allUsers', 'GET');
        }
        getData();
      }, []);
  return (
    <div>
      <h2>AllUsers</h2>
      {users.data && <Table dataTable={users.data} />}
    </div>
  );
}

export default AllUsers;
