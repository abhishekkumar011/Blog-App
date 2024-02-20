import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import MyButton from "../button/MyButton";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return <MyButton classname="ml-2" onClick={logoutHandler}>Logout</MyButton>;
};

export default LogoutBtn;
