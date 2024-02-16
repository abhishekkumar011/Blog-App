import React from "react";
import { MyButton, MyInput } from "../../components";
import logo from "../../assets/logo.png";

const Login = () => {
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

        <form className="mt-8">
          <div className="space-y-7">
            <MyInput
              label="Email"
              placeholder="Enter your email"
              type="email"
              className="border-b-2 border-gray-300 focus:outline-none placeholder:text-sm"
            />

            <MyInput
              label="Password"
              placeholder="Enter your password"
              type="password"
              className="border-b-2 border-gray-300 focus:outline-none placeholder:text-sm"
            />

            <MyButton type="submit" classname="w-full">
              Sign in
            </MyButton>
          </div>
        </form>

        <p className="mt-12 text-center text-base text-black/60 flex gap-1 justify-center">
          Don&apos;t have any account?&nbsp;
          <p className="font-medium cursor-pointer text-primary-dark transition-all duration-200 hover:underline">
            Sign Up
          </p>
        </p>
      </div>
    </div>
  );
};

export default Login;
