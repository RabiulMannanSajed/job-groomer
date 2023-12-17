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
  const handleOfficeName = (companyName, userId) => {
    console.log("user", userId);
    console.log(companyName);
    const officeName = {
      companyName,
    };
    fetch(`http://localhost:5000/users/officeName/${userId._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(officeName),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("this is the data", data);
        if (data.modifiedCount) {
          refetch();
          console.log("value of count", data.modifiedCount);
          Swal.fire(
            `Mr.${userId.name} is become admin of this company ${companyName}`
          );
        } else {
          console.error("No modification occurred.");
        }
      });
    console.log("this is user id", userId._id);
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
                {/* TODO : fixed the error  why the company name can't add */}
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
                      {office.map((officeName) => (
                        <li key={officeName._id}>
                          <a
                            className="text-black"
                            onClick={() =>
                              handleOfficeName(officeName.companyName, user)
                            }
                          >
                            {officeName.companyName}
                          </a>
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
