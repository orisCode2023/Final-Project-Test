import Table from "../../components/Table";

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
      {users && <Table dataTable={users} />}
    </div>
  );
}

export default AllUsers;
