import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useUser from "../../../hooks/useUser";

const AdminHome = () => {
  const [userInfo, setUserInfo] = useState([]);
  const { user } = useContext(AuthContext);
  const [users] = useUser();
  useEffect(() => {
    const userInfo = users.find(
      (userEmail) => userEmail?.email === user?.email
    );
    setUserInfo(userInfo);
  }, [users, user?.email]);
  console.log(userInfo);

  console.log(user);
  return (
    <div>
      <h2>this is admin home</h2>
      <p>Admin : {userInfo?.email}</p>
      <p>You won this office :{userInfo?.officeName}</p>
    </div>
  );
};

export default AdminHome;
