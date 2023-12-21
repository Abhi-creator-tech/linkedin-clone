import React, { useState, useEffect } from "react";
import "../css/Login.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, signupUser } from "../store/asyncThunks/authAsyncThunk";

const Login = () => {
  const [signup, setSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    appType: "linkedin",
  });
  const [errorData, setErrorData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authenticated, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (authenticated) {
      return navigate("/");
    }
  }, [authenticated]);

  const disabled =
    Object.values(errorData).join("") ||
    Object.values(formData).some((val) => val === "");

  const onSubmit = (e) => {
    console.log("asdf", signup);
    e.preventDefault();
    // if (disabled) {
    //   return;
    // }
    if (signup) {
      dispatch(signupUser(formData));
    } else {
      dispatch(loginUser(formData));
    }
  };

  const checkErrors = (e) => {
    let { name, value } = e.target;
    if (!value) {
      value = `${name[0].toUpperCase() + name.slice(1)} is required`;
    } else if (name === "email" && !validateEmail(value)) {
      value = "Please Enter Valid Email";
    } else {
      value = "";
    }

    setErrorData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onFocus = (e) => {
    const { name } = e.target;
    setErrorData((prev) => ({ ...prev, [name]: "" }));
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="loginScreen">
        <LinkedInIcon />
        <p>{error}</p>
        {signup ? (
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={formData?.name}
              onChange={onInputChange}
              onFocus={onFocus}
              onBlur={checkErrors}
              name="name"
            />
            {errorData?.name && (
              <p className="error text-[#db3236]">{errorData?.name}</p>
            )}
            <input
              type="email"
              placeholder="Email or phone number"
              value={formData?.email}
              onChange={onInputChange}
              onFocus={onFocus}
              onBlur={checkErrors}
              name="email"
            />
            {errorData?.email && (
              <p className="error text-[#db3236]">{errorData?.email}</p>
            )}
            <input
              type="password"
              placeholder="Password"
              value={formData?.password}
              onChange={onInputChange}
              onFocus={onFocus}
              onBlur={checkErrors}
              name="password"
            />
            {errorData?.password && (
              <p className="error text-[#db3236]">{errorData?.password}</p>
            )}

            <button type="submit">Signup</button>
            <h4>
              Already a member ?{" "}
              <span onClick={() => setSignup(false)}>Register Here</span>
            </h4>
          </form>
        ) : (
          <form onSubmit={onSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={formData?.email}
              onChange={onInputChange}
              onFocus={onFocus}
              onBlur={checkErrors}
              name="email"
            />
            {errorData?.email && (
              <p className="error text-[#db3236]">{errorData?.email}</p>
            )}
            <input
              type="password"
              placeholder="Password"
              value={formData?.password}
              onChange={onInputChange}
              onFocus={onFocus}
              onBlur={checkErrors}
              name="password"
            />
            {errorData?.password && (
              <p className="error text-[#db3236]">{errorData?.password}</p>
            )}

            <button type="submit">Login</button>
            <h4>
              Not a member ?{" "}
              <span onClick={() => setSignup(true)}>Signup Here</span>
            </h4>
          </form>
        )}
      </div>
    </>
  );
};
export default Login;
const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};
