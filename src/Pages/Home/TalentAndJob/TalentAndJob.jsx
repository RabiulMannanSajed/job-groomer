import { Link } from "react-router-dom";
import useUser from "../../../hooks/useUser";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const TalentAndJob = () => {
  const [users] = useUser();
  const { user } = useContext(AuthContext);
  const [userRole, setUserRole] = useState(false);
  useEffect(() => {
    const userAdmin = users.find(
      (userEmail) => userEmail?.email == user?.email
    );
    setUserRole(userAdmin);
  }, [user?.email, users]);

  return (
    <div>
      <div className="flex">
        <div>
          <Link to="/jobs">
            <button className="btn btn-success text-xl mr-3">
              Search A Job
            </button>
          </Link>
        </div>
        <div>
          {userRole?.role == "admin" ? (
            <>
              <Link to="/postAJob">
                <button className="btn btn-success text-xl mr-3">
                  Find A Talent
                </button>
              </Link>{" "}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default TalentAndJob;
