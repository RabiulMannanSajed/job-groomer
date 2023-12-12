import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLoaderData, useLocation, useParams } from "react-router-dom";

const Apply = () => {
  const [officeName, setOfficeName] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  console.log("id from apply", id);

  const officeNameId = useLoaderData();
  useEffect(() => {
    const officeId = officeNameId.find((data) => data._id == id);
    console.log(officeId);
    setOfficeName(officeId);
  }, [id, officeNameId]);

  const { jobName } = useParams();
  console.log("from apply", jobName);
  const { user } = useContext(AuthContext);
  const handleApplyInfo = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.fullName.value;
    const country = form.country.value;
    const city = form.city.value;
    const institute = form.institute.value;
    const passYear = form.passYear.value;
    const experience = form.experience.value;
    const yearOfExp = form.yearOfExp.value;

    // send those data the data base

    const applicantInfo = {
      companyName: officeName?.companyName,
      jobName: jobName,
      name: fullName,
      email: user?.email,
      address: [country, city],
      institute: institute,
      passYear: passYear,
      experience: experience,
      yearOfExp: yearOfExp,
      // companyName: companyName,
    };
    fetch("http://localhost:5000/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(applicantInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("User created successfully");
        }
      });
  };
  return (
    <div>
      {user && user?.email ? (
        <>
          <div className=" bg-base-200">
            {/* take value as form */}
            {/* push those value in data base post */}
            <div onSubmit={handleApplyInfo}>
              <h2 className="text-center font-bold text-xl m-6">
                {" "}
                Apply for the job
              </h2>
              <div className=" w-full  shadow-2xl bg-base-100">
                <form className="card-body">
                  {/*  this is company name  */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold text-xl">
                        Company Name{" "}
                      </span>
                    </label>
                    <input
                      type="name"
                      placeholder="Enter your COmpany name You are applying"
                      value={officeName.companyName}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  {/* this is for job name */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold text-xl">
                        Job Name
                      </span>
                    </label>
                    <input
                      type="name"
                      placeholder="Enter your COmpany name You are applying"
                      value={jobName}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  {/* this is for name and email */}
                  <div className="flex justify-around">
                    <div className="w-2/4 mr-5">
                      <label className="label">
                        <span className="label-text font-bold text-xl ">
                          Full name
                        </span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        className="input input-bordered w-full"
                        placeholder="Enter Your full name"
                        required
                      />
                    </div>
                    <div className="w-2/4">
                      <label className="label">
                        <span className="label-text font-bold text-xl ">
                          Email
                        </span>
                      </label>
                      <input
                        type="text"
                        value={user?.email}
                        className="input input-bordered w-full"
                        placeholder="pass Out/ still you student"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold text-xl ">
                        Address
                      </span>
                    </label>
                    <div className="flex justify-around">
                      <div className="w-2/4 mr-5">
                        <input
                          type="text"
                          name="country"
                          className="input input-bordered w-full"
                          placeholder="County Name"
                          required
                        />
                      </div>
                      <div className="w-2/4">
                        <input
                          type="text"
                          name="city"
                          className="input input-bordered w-full"
                          placeholder="City Name"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  {/* for education */}
                  <div className="flex justify-around">
                    <div className="w-2/4 mr-5">
                      <label className="label">
                        <span className="label-text font-bold text-xl ">
                          Institute name
                        </span>
                      </label>
                      <input
                        type="text"
                        name="institute"
                        className="input input-bordered w-full"
                        placeholder="Institute name"
                        required
                      />
                    </div>
                    <div className="w-2/4">
                      <label className="label">
                        <span className="label-text font-bold text-xl ">
                          Your passing Year / student
                        </span>
                      </label>
                      <input
                        type="text"
                        name="passYear"
                        className="input input-bordered w-full"
                        placeholder="pass Out/ still you student"
                        required
                      />
                    </div>
                  </div>

                  {/*  your experience  */}
                  <div className="flex justify-around">
                    <div className="w-2/4 mr-5">
                      <label className="label">
                        <span className="label-text font-bold text-xl ">
                          How Experienced are you
                        </span>
                      </label>
                      <input
                        type="text"
                        name="experience"
                        className="input input-bordered w-full"
                        placeholder="Your Experience "
                        required
                      />
                    </div>
                    <div className="w-2/4">
                      <label className="label">
                        <span className="label-text font-bold text-xl ">
                          work Experience in this sector
                        </span>
                      </label>
                      <input
                        type="text"
                        name="yearOfExp"
                        className="input input-bordered w-full"
                        placeholder="Year of Experience"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text font-bold text-xl ">
                        Before You work Company name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      className="input input-bordered w-full"
                      placeholder="Company name"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <input
                      className="btn btn-primary"
                      type="submit"
                      value="submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <Link to="/login">
            <button className="btn btn-success mt-5">
              Place login to Apply{" "}
            </button>
          </Link>{" "}
        </>
      )}
    </div>
  );
};

export default Apply;
