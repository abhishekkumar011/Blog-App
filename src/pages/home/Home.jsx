import React from "react";
import man from "../../assets/man.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "../../components";

const Home = () => {
  const authStatus = useSelector((state) => state.auth.status);

  return (
    <div className="min-h-screen">
      <Container>
        <div className="flex justify-center">
          <div className="w-3/4 mt-16 flex border-2 rounded-md shadow-lg md:flex-row flex-col">
            {/* left  */}
            <div className="lg:w-1/3 md:w-1/3 sm:w-full pt-5 pl-5 flex justify-center items-center lg:block border-b-2">
              <img className="w-44 md:w-72" src={man} alt="" />
            </div>

            {/* Right */}
            <div className="md:w-2/3 p-10 sm:w-full">
              <div>
                <h1 className="text-2xl font-bold text-center mb-5 font-mono text-gray-800">
                  Blog APP
                </h1>
                <p className="text-gray-700">
                  In the digital era, blogging has become an integral part of
                  online communication, allowing individuals to express their
                  thoughts, share knowledge, and engage with communities.
                  Building a blogging website provides a platform for users to
                  create, edit, and delete posts. This project aims to develop a
                  user-friendly and feature-rich blogging website with
                  functionalities such as user authentication, post management,
                  and dynamic content creation.
                </p>
              </div>

              {authStatus ? (
                <p className="mt-7 lg:mt-28 font-semibold text-gray-700">
                  Welcome to our website
                </p>
              ) : (
                <p className="mt-7 lg:mt-28 flex gap-1 font-semibold text-gray-700">
                  Login to read Post -
                  <Link
                    to={"/login"}
                    className="font-medium cursor-pointer text-primary-dark transition-all duration-200 hover:underline"
                  >
                    Login
                  </Link>
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
