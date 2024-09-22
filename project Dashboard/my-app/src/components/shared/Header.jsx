import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { IoRefresh } from "react-icons/io5";
import { FaGreaterThan } from "react-icons/fa6";

const Header = () => {
  return (
    <div>
      <div
        id="headerBorder"
        className="border-b border-gray-300 absolute left-0 right-0"
      ></div>
      <div className=" h-20 px-4 flex justify-between items-center mt-20">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-neutral-600">Home </h2>
            <FaGreaterThan fontSize={10} className="text-neutral-600" />
          </div>
          <p className="text-2xl font-bold text-neutral-800">
            User Managment (RBAC)
          </p>
        </div>
        <div className="flex justify-between items-center gap-5">
          <button className="px-3 h-10 text-white bg-neutral-700 border items-center border-neutral-300 rounded-md shadow-sm hover:bg-neutral-600 font-bold">
            Register New Users
          </button>
          <button className="px-3 h-10 text-neutral-700 border border-neutral-300 hover:bg-neutral-200 rounded-md flex items-center gap-1 font-bold">
            <IoRefresh fontSize={20} />
            Refresh
          </button>
          <div className="relative">
            <HiOutlineSearch
              fontSize={20}
              className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
            />
            <input
              type="text"
              placeholder="Search..."
              className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 px-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
