import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const PostAjob = () => {
  // this is add in office API
  // and take full details
  //   TODO: make post Api in server site
  // user Email is the the admin email amd role Admin
  // Email and role is going (User API with full info {name,email,role,companyName })

  const { user } = useContext(AuthContext);
  const handlePostAJob = (event) => {
    event.preventDefault();
    const form = event.target;
    const companyName = form.companyName.value;
    const jobName = form.jobName.value;
    const jobTitle = form.jobTitle.value;
    const duration = form.duration.value;
    const stipend = form.stipend.value;
    const startDate = form.startDate.value;
    const experience = form.experience.value;
    const workFrom = form.workFrom.value;
    const aboutTheWork = form.aboutTheWork.value;
    const skills = form.skill.value.split(",").map((skill) => skill.trim()); // Split skills by comma
    const whoApply = form.whoApply.value
      .split(",")
      .map((apply) => apply.trim());

    const makeNewOffice = {
      companyName: companyName,
      jobName: jobName,
      jobTitle: jobTitle,
      duration: duration,
      stipend: stipend,
      startDate: startDate,
      experience: experience,
      workFrom: workFrom,
      aboutTheWork: aboutTheWork,
      skills: skills,
      whoApply: whoApply,
    };
    /*  console.log("Company Name:", companyName);
    console.log("Job Name:", jobName);
    console.log("Job Title:", jobTitle);
    console.log("Duration:", duration);
    console.log("Stipend:", stipend);
    console.log("Start Date:", startDate);
    console.log("Experience:", experience);
    console.log("Work From:", workFrom);
    console.log("About The Work:", aboutTheWork);
    console.log(user?.email);
    console.log();
    // Log and use the arrays
    console.log("Skills:", skills);
    console.log("Who Apply:", whoApply); */
    fetch("http://localhost:5000/office", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(makeNewOffice),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("User created successfully");
        }
      });
  };
  const handleUserMakeAdmin = (event) => {
    event.preventDefault();
    const form = event.event;
    const companyName = form.companyName.value;

    console.log(user?.email);
    console.log("admin");
    const makeUserAdmin = {
      companyName: companyName,
      role: "admin",
    };
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(makeUserAdmin),
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
      <form onSubmit={handlePostAJob}>
        {/* company name */}
        <div>
          <label className="label">
            <span className="label-text font-bold text-xl">Company Name </span>
          </label>
          <input
            type="name"
            placeholder="Enter your COmpany name "
            name="companyName"
            className="input input-bordered"
            required
          />
        </div>

        {/* job Name */}
        <div>
          <label className="label">
            <span className="label-text font-bold text-xl">
              Job Name / which field{" "}
            </span>
          </label>
          <input
            type="name"
            placeholder="Enter your COmpany name You are applying"
            name="jobName"
            className="input input-bordered"
            required
          />
        </div>
        {/* jobTitle*/}
        <div>
          <label className="label">
            <span className="label-text font-bold text-xl">
              Job Title / About the job in sort
            </span>
          </label>
          <input
            type="name"
            placeholder="Enter About the job in sort"
            name="jobTitle"
            className="input input-bordered"
            required
          />
        </div>

        {/* duration */}
        <div>
          <label className="label">
            <span className="label-text font-bold text-xl">
              Duration of this contract month/year{" "}
            </span>
          </label>
          <input
            type="name"
            placeholder="Enter the  in duration month/year"
            name="duration"
            className="input input-bordered"
            required
          />
        </div>
        {/* stipend */}
        <div>
          <label className="label">
            <span className="label-text font-bold text-xl">Stipend </span>
          </label>
          <input
            type="name"
            placeholder="Enter the salary 000-000 USD"
            name="stipend"
            className="input input-bordered"
            required
          />
        </div>
        {/*startDate  */}
        <div>
          <label className="label">
            <span className="label-text font-bold text-xl">startDate </span>
          </label>
          <input
            type="name"
            placeholder="When requrting is start"
            name="startDate"
            className="input input-bordered"
            required
          />
        </div>
        {/* experience */}
        <div>
          <label className="label">
            <span className="label-text font-bold text-xl">
              Experience TO apply in this Job
            </span>
          </label>
          <input
            type="name"
            placeholder="Enter the 0-0 year / Fresher"
            name="experience"
            className="input input-bordered"
            required
          />
        </div>
        {/* workFrom */}
        <div>
          <label className="label">
            <span className="label-text font-bold text-xl">Work Place </span>
          </label>
          <input
            type="name"
            placeholder="Enter the location / work Form home"
            name="workFrom"
            className="input input-bordered"
            required
          />
        </div>
        {/* aboutTheWork */}
        <div>
          <label className="label">
            <span className="label-text font-bold text-xl">
              About The Work{" "}
            </span>
          </label>
          <input
            type="name"
            placeholder="Enter About The Work"
            name="aboutTheWork"
            className="input input-bordered"
            required
          />
        </div>
        {/* skill */}
        <div>
          <label className="label">
            <span className="label-text font-bold text-xl">
              Skills for The Work (comma-separated)
            </span>
          </label>
          <input
            type="name"
            placeholder="Enter The Skills for The Work"
            name="skill"
            className="input input-bordered"
            required
          />
        </div>
        {/*  whoApply*/}
        <div>
          <label className="label">
            <span className="label-text font-bold text-xl">
              Who Apply (comma-separated)
            </span>
          </label>
          <input
            type="name"
            placeholder="Enter The info who Apply"
            name="whoApply"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="submit" />
        </div>
      </form>
      <form onSubmit={handleUserMakeAdmin}>
        {/* admin email and role  */}
        <h1>Make u admin in this company</h1>
        <div>
          <div>
            {" "}
            <label className="label">
              <span className="label-text font-bold text-xl">Admin email </span>
            </label>
            <input
              type="name"
              placeholder="Admin Email "
              value={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div>
            {" "}
            <label className="label">
              <span className="label-text font-bold text-xl">User Role </span>
            </label>
            <input
              type="name"
              placeholder="Admin Email "
              value={"admin"}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        {/* company name */}
        <div>
          <label className="label">
            <span className="label-text font-bold text-xl">Company Name </span>
          </label>
          <input
            type="name"
            placeholder="Enter your COmpany name "
            name="companyName"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default PostAjob;
