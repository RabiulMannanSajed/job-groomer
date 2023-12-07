import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser } = useContext(AuthContext);
  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      Swal.fire("Successfully Sign Up");
    });
  };

  /* plz init this (npm install react-hook-form) */
  return (
    <div className="hero min-h-screen bg-base-200 mb-10">
      <div className="">
        <h1 className="mb-10 text-5xl font-bold">Login now!</h1>
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
                    value: /\S+@bscse\.uiu\.ac\.bd$/,
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
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]/,
                })}
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">password required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">
                  password must be more then 6 character
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  password must be less then 20char required
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  password must have one uppercase one lowercase, one number and
                  one special character
                </p>
              )}
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
