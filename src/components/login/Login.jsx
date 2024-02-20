import React, { useState } from "react";
import { MyButton, MyInput } from "../../components";
import { login as storeLogin } from "../../store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import logo from "../../assets/logo.png";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(storeLogin({ userData: userData }));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="mx-auto w-96 max-w-lg shadow-lg rounded-md p-10 border border-black/10">
        <div className="mb-4 flex justify-center ">
          <span className="max-w-7">
            <img src={logo} />
          </span>
        </div>

        <h2 className="text-center text-lg leading-tight text-gray-500 mb-12">
          Sign in to your account
        </h2>

        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-7">
            <MyInput
              label="Email"
              placeholder="Enter your email"
              type="email"
              className="border-b-2 border-gray-300 focus:outline-none placeholder:text-sm"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />

            <MyInput
              label="Password"
              placeholder="Enter your password"
              type="password"
              className="border-b-2 border-gray-300 focus:outline-none placeholder:text-sm"
              {...register("password", {
                required: true,
              })}
            />

            <MyButton type="submit" classname="w-full">
              Sign in
            </MyButton>
          </div>
        </form>

        <p className="mt-12 text-center text-base text-black/60 flex gap-1 justify-center">
          Don&apos;t have any account?&nbsp;
          <Link
            to={"/signup"}
            className="font-medium cursor-pointer text-primary-dark transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
