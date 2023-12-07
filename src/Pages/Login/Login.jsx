import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  // event is work to take value form input
  const handelLogin = (event) => {
    event.preventDefault(); // stop page to reload
    const form = event.target; // take the value form input
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(result);
      Swal.fire("successFully Login");
    });
  };
  return (
    <div className="hero min-h-screen bg-base-200 mb-10">
      <div className="">
        <h1 className="mb-10 text-5xl font-bold">Login now!</h1>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
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
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="p-4">
            <small>
              New Here?{" "}
              <Link className="text-blue-500" to="/signup">
                Create an account
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
