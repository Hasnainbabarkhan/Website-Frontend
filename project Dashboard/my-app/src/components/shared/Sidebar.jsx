import React from "react";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../lib/consts/navigation";
import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-200 hover:no-underline active:bg-neutral-200 rounded-sm text-base";

const Sidebar = () => {
  return (
    <div className="bg-transparent border-r border-gray-300 w-60 p-3 flex flex-col text-black">
      <div className="flex-1 py-20 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-gray-300">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};

const SidebarLink = ({ item }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classnames(
        pathname === item.path
          ? "bg-neutral-200 text-gray-500" 
          : "text-gray-500",
        linkClasses
      )}
    >
      <span className="text-xl mr-2">{item.icon}</span>
      {item.label}
    </Link>
  );
};

export default Sidebar;
