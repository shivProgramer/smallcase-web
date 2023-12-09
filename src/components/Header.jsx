import { Navbar } from "flowbite-react";
import * as React from "react";
import { Link } from "react-router-dom";


import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
const Header = () => {
  const [Resources, setResources] = React.useState(false);
  const [More, setMore] = React.useState(false);

  const toggleMore = () => {
    setMore(!More);
  };

   const toggleResources = () => {
     setResources(!Resources);
   };

  return (
    <div className=" mx-auto  md:px-20 shadow">
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <span
            title="smallcase"
            className="self-center whitespace-nowrap text-xl text-[#0E7490] font-semibold dark:text-white"
          >
            smallcase
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <button className="bg-slate-50 text-[#0E7490] border border-[#0E7490] px-4 rounded py-1 hover:bg-slate-300 font-bold">
            Login
          </button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#"> Discover </Navbar.Link>
          <Navbar.Link href="#"> Watchlist </Navbar.Link>
          <Navbar.Link href="#"> Resources </Navbar.Link>
          
          <div className="relative items-center left-40">
            <button
              onClick={toggleResources}
              className="text-gray-700 absolute"
            >
              <span className="flex items-center gap-2 text-center">
                Resources{" "}
                {Resources ? (
                  <MdOutlineKeyboardArrowDown className="text-xl" />
                ) : (
                  <MdOutlineKeyboardArrowUp className="text-xl" />
                )}{" "}
              </span>
            </button>
            {Resources && (
              <div className="mx-5 mt-10 border-solid border-2 border-gray-300 px-5 py-2 absolute flex flex-col dropdown-content transition-opacity duration-3000 ease-out opacity-100 shadow">
                <Link
                  href="#"
                  className="p-2 border-solid border-b border-gray-300"
                >
                  Discover
                </Link>
                <Link
                  href="# "
                  className="p-2 border-solid border-b border-gray-300"
                >
                  Watchlist
                </Link>
                <Link href="#" className="p-2">
                  Resources
                </Link>
              </div>
            )}
          </div>
          {/* ***************** */}
          <div className="relative items-center right-10">
            <button onClick={toggleMore} className="text-gray-700 absolute">
              <span className="flex items-center gap-2 text-center">
                more{" "}
                {More ? (
                  <MdOutlineKeyboardArrowDown className="text-xl" />
                ) : (
                  <MdOutlineKeyboardArrowUp className="text-xl" />
                )}{" "}
              </span>
            </button>
            {More && (
              <div className="mx-5 mt-10 border-solid border-2 border-gray-300 px-5 py-2 absolute flex flex-col dropdown-content transition-opacity duration-3000 ease-out opacity-100 shadow">
                <Link
                  href="#"
                  className="p-2 border-solid border-b border-gray-300"
                >
                  Discover
                </Link>
                <Link
                  href="# "
                  className="p-2 border-solid border-b border-gray-300"
                >
                  Watchlist
                </Link>
                <Link href="#" className="p-2">
                  Resources
                </Link>
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
