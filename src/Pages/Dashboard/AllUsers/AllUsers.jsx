import useUser from "../../../hooks/useUser";
import useOffice from "../../../hooks/useOffice";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [users, refetch] = useUser();
  const [office] = useOffice();
  //   this is for make user admin base on id
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire(`Mr.${user.name} is become admin`);
        }
      });
  };
  //   this is for make user admin base on office name
  const handleOfficeName = (companyName, user) => {
    fetch(`http://localhost:5000/users/officeName/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire(
            `Mr.${user.name} is become admin of this company ${companyName}`
          );
        }
      });
  };
  // to delete any user based on id
  const handleDelete = () => {};
  return (
    <div>
      <h2>this is all users</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Restaurant Won</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost bg-orange-500"
                    >
                      User
                    </button>
                  )}
                </td>
                <td>
                  <div className="dropdown dropdown-hover">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn m-1 font-bold"
                    >
                      Company Name
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      {/* here first i take the rest name and then i take the user send it to the fnc  */}
                      {office.map((officeName) => (
                        <li key={officeName._id}>
                          {users.map((user) => (
                            <a
                              className="text-black"
                              key={user._id}
                              onClick={() =>
                                handleOfficeName(officeName.companyName, user)
                              }
                            >
                              {officeName.companyName}
                            </a>
                          ))}
                        </li>
                      ))}
                    </ul>
                  </div>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost bg-red-500 font-bold"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
