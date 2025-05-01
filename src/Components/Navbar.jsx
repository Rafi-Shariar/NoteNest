import React from "react";
import { LuNotebookPen } from "react-icons/lu";
import { Navigate, NavLink } from "react-router";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center lg:ml-10">
            <LuNotebookPen className="text-2xl mt-1 mr-2 text-blue-600"></LuNotebookPen>
             <a className=" text-2xl  font-semibold">Note<span className=" text-blue-600 font-light">Nest</span></a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           
          </ul>
        </div>
        <div className="navbar-end lg:mr-10">
          <NavLink className="btn hover:bg-blue-500 hover:text-white" to='/addnote'>Add Notes</NavLink>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
