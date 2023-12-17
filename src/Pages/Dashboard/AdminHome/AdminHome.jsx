import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useUser from "../../../hooks/useUser";
import useApplier from "../../../hooks/useApplier";

import Swal from "sweetalert2";

const AdminHome = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [applierData, setApplierData] = useState([]);
  const { user } = useContext(AuthContext);
  const [users] = useUser();
  const [apply] = useApplier();
  // check the user is admin or not
  useEffect(() => {
    const userInfo = users.find(
      (userEmail) => userEmail?.email === user?.email
    );
    setUserInfo(userInfo);
  }, [users, user?.email]);

  useEffect(() => {
    const applierInfo = apply.filter(
      (applier) =>
        applier?.companyName?.toLowerCase() ===
        userInfo?.officeName?.toLowerCase()
    );
    setApplierData(applierInfo);
    // TODO
  }, [apply, userInfo]);

  //  hired info send data to backend
  const handleHire = (applicantId) => {
    fetch(`http://localhost:5000/apply/hire/${applicantId}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire("This candidate is Hire");
        }
      });
  };
  const handleReject = (applicantId) => {
    fetch(`http://localhost:5000/apply/reject/${applicantId}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Are you sure?",
            text: "You reject this Candidate",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
        }
      });
  };
  return (
    <div className="m-10">
      <h2 className="text-xl font-bold text-center">This is Admin Home</h2>

      {/* this is applier info part */}
      <div className="mb-5">
        <p className="font-semibold">Name : {user?.displayName}</p>
        <p className="font-semibold">Admin : {userInfo?.email}</p>
        <p className="font-semibold">
          You office Name : {userInfo?.officeName}
        </p>
      </div>
      {/* show all appliers */}
      <div>
        <p className="text-lg font-bold">
          People Applied : {applierData.length}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {applierData.map((applierPerson) => (
          <div
            className="card w-96 bg-[#eab676] shadow-xl"
            key={applierData.key}
          >
            <div className="card-body">
              <h2 className="card-title">{applierPerson.name}</h2>
              <p>
                <span className="text-xl font-semibold">Institute:</span>{" "}
                <b>{applierPerson.institute}</b>
              </p>

              <p>
                <span className="text-xl font-semibold">PassYear:</span>{" "}
                <b>{applierPerson.passYear}</b>
              </p>
              {applierPerson.hire === "hire" ? (
                <>
                  <p className="font-bold text-green-500">
                    This applier is Hired
                  </p>
                </>
              ) : (
                <></>
              )}
              {/* btn for Hired and ignore */}
              <div className="flex justify-between">
                {applierPerson.hire === "hire" ? (
                  <></>
                ) : (
                  <>
                    {" "}
                    <div className="card-actions justify-end">
                      <button
                        onClick={() => handleHire(applierPerson._id)}
                        className="btn bg-[#abdbe3]"
                      >
                        Hired
                      </button>
                    </div>
                  </>
                )}

                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleReject(applierPerson._id)}
                    className="btn bg-[#abdbe3]"
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminHome;
