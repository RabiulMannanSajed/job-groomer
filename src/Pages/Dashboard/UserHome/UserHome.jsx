import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useUser from "../../../hooks/useUser";

const UserHome = () => {
  const [userInfo, setUserInfo] = useState([]);
  const { user } = useContext(AuthContext);

  const [users] = useUser();
  useEffect(() => {
    const userData = users.find(
      (userEmail) => userEmail?.email === user?.email
    );
    setUserInfo(userData);
  }, [user?.email, users]);
  return (
    <div className="ml-8">
      <h2 className="font-bold text-center text-2xl"> Home Page</h2>
      <p className="text-slate-500 text-xl mt-5">
        {" "}
        Hi! {userInfo?.name} this is Your home Page and You can update you
        profile here
      </p>
      <p></p>
      <div></div>
      <div className="mt-10">
        <p>
          Name : <b>{userInfo?.name}</b>
        </p>
        <p>
          Email : <b>{userInfo?.email}</b>
        </p>
        <p>Job : {userInfo?.role}</p>
      </div>
    </div>
  );
};

export default UserHome;
