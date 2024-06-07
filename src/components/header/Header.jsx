import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Container, LogoutBtn, MyButton } from "../../components";
import logo from "../../assets/logo.png";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (slug) => {
    navigate(slug);
    setIsOpen(false);
  };

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },

    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },

    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },

    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },

    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow-md">
      <Container>
        <nav className="flex items-center justify-between ">
          <div className="flex items-center">
            <Link to={"/"}>
              <img src={logo} style={{ width: "30px" }} />
            </Link>
            <span className="ml-3 text-gray-700">Coder's Blog</span>
          </div>
          <ul className="hidden ml-auto sm:hidden md:flex">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <MyButton
                    onClick={() => navigate(item.slug)}
                    classname="bg-transparent hover:rounded-sm hover:text-white"
                    textColor="text-gray-900"
                  >
                    {item.name}
                  </MyButton>
                </li>
              ) : null
            )}

            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>

          <div className="menu-icon ml-2 cursor-pointer sm:block md:hidden">
            <svg
              onClick={() => {
                setIsOpen(true);
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width={24}
              height={24}
            >
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
            </svg>
          </div>

          {isOpen && (
            <div className="w-[250px] h-full bg-white fixed top-0 right-0 z-50 shadow-2xl">
              <div
                className="flex justify-end p-3 w-full"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#fffff"
                  width={30}
                  height={30}
                >
                  <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                </svg>
              </div>

              <div className="flex flex-col mt-10 w-full items-center ">
                {navItems.map((item) =>
                  item.active ? (
                    <li key={item.name} className="list-none">
                      <MyButton
                        onClick={() => handleNavigate(item.slug)}
                        classname="bg-transparent hover:rounded-sm hover:text-white"
                        textColor="text-gray-900"
                      >
                        {item.name}
                      </MyButton>
                    </li>
                  ) : null
                )}

                {authStatus && (
                  <li className="list-none mt-2">
                    <LogoutBtn />
                  </li>
                )}
              </div>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
};

export default Header;
