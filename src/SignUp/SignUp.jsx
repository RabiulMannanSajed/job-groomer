import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      Swal.fire("Successfully Sign Up");

      updateUserProfile(data.name)
        .then(() => {
          const saveUser = {
            name: data.name,
            email: data.email,
          };
          // send data to the backend
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                console.log("user profile update");
                reset();
                Swal.fire("User Created successfully");
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };

  /* plz init this (npm install react-hook-form) */
  return (
    <div className="hero min-h-screen bg-base-200 mb-10">
      <div className="">
        <h1 className="mb-10 text-5xl font-bold">SignUp now!</h1>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name")}
                required={true}
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: true,
                  pattern: {
                    /* TODO : cnage the bscse */
                    value: /\S+@gmail\.com$/,
                    message: "Entered value does not match email format",
                  },
                })}
                name="email"
                placeholder="email"
                className="input input-bordered"
                type="email"
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                })}
                name="password"
                placeholder="password"
                className="input input-bordered"
              />

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-[#D1A054]"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="p-4">
            <small>
              All ready have an Account{" "}
              <Link className="text-blue-500" to="/login">
                Login{" "}
              </Link>{" "}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
