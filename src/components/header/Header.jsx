import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Container, LogoutBtn, MyButton } from "../../components";
import logo from "../../assets/logo.png";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

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
        <nav className="flex items-center">
          <div className="w-6">
            <Link to={"/"}>
              <img src={logo} />
            </Link>
          </div>
          <span className="ml-3 text-gray-700">Coder's Blog</span>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <MyButton
                    onClick={() => navigate(item.slug)}
                    classname="bg-transparent text-gray-700 hover:rounded-sm hover:text-white"
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
        </nav>
      </Container>
    </header>
  );
};

export default Header;
