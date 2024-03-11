import React, { Fragment, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header({ logo }) {
  const [toggle, setToggle] = useState(false);
  const setHeadle = () => {
    setToggle(!toggle);
  };
  return (
    <Fragment>
      <section className=" bg-[#181818] text-white w-[100%]  fixed top-0">
        <div className=" w-full">
          <div className="container  md:w-[1340px]  mx-auto md:flex md:justify-between md:items-center md:py-8 flex justify-between  items-center p-4 md:p-0">
            <Link to={"/"} className="logo md:w-[25%] text-2xl font-bold ">{logo}</Link>
            <div className="nav md:w-[75%] flex justify-end ">
              <ul className="md:flex md:justify-between md:gap-4 w-[100%]  ">
                <div className="group w-[100%]  mr-4 relative">
                  <FaSearch className="absolute md:right-[280px] duration-200 ease-in cursor-pointer text-black md:group-hover:right-[240px] right-[50px] top-2"/>
                <input type="text" placeholder="Search Your Products" className="md:w-[70%] outline-none text-black md:group-hover:w-[75%] transition-all duration-300 rounded-full ease-linear py-1 px-5" />
                </div>
             
              </ul>
              
              <FaCartPlus className="text-3xl cursor-pointer"/>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Header;
