import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useUser from "../../../hooks/useUser";
import useApplier from "../../../hooks/useApplier";

const UserHome = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [applierData, setApplierData] = useState([]);
  const { user } = useContext(AuthContext);
  const [apply, refetch] = useApplier();

  const [users] = useUser();
  useEffect(() => {
    const userData = users.find(
      (userEmail) => userEmail?.email === user?.email
    );
    setUserInfo(userData);
  }, [user?.email, users]);
  //  show he apply in which office
  //  to show the info filter he did apply or not
  useEffect(() => {
    const applierInfo = apply.filter(
      (applier) => applier?.email === userInfo?.email
    );
    setApplierData(applierInfo);
  }, [apply, userInfo?.email]);

  return (
    <div className="ml-8">
      <h2 className="font-bold text-center text-2xl"> Home Page</h2>
      <p className="text-slate-500 text-xl mt-5">
        {" "}
        Hi! {userInfo?.name} this is Your profile and You can see your
        Information here
      </p>
      <div className="mt-10">
        <p>
          Name : <b>{userInfo?.name}</b>
        </p>
        <p>
          Email : <b>{userInfo?.email}</b>
        </p>
      </div>
      <div className="flex flex-col w-full lg:flex-row mt-5">
        {/* this is for apply info  */}{" "}
        <div className="grid flex-grow  card bg-red-200 rounded-box p-10">
          <p className="text-xl font-semibold ">
            Your Apply in total {applierData.length} office
          </p>
          {applierData.map((youApply) => (
            <div key={youApply._id} className="mt-5">
              <p>Applied Office Name: {youApply?.companyName}</p>
              <p>Sector You Apply: {youApply?.jobName}</p>
            </div>
          ))}
        </div>
        <div className="divider lg:divider-horizontal"></div>
        {/* this is for hire  info  */}
        <div className="grid flex-grow  card bg-green-200 rounded-box p-10">
          <p className="text-xl font-semibold mb-5">The company Hire </p>
          {applierData.map((youApply) => (
            <div key={youApply._id}>
              {youApply.hire == "hire" ? (
                <>
                  <div>
                    <p>Company Name : {youApply?.companyName}</p>
                    <p>Sector You Hired: {youApply?.jobName}</p>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserHome;
