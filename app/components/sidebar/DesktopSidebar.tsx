"use client";
import useRoutes from "@/app/hooks/useRoutes";
import DesktopItem from "./DesktopItem";
import { User } from "@prisma/client";
import { useState } from "react";
import Avatar from "../Avatar";

interface DesktopSidebarProps {
  currentUser: User;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ currentUser }) => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="
          hidden
          lg:fixed
          lg:inset-y-0
          lg:left-0
          lg:z-40
          lg:w-20
          lg:overflow-auto
          lg:bg-white
          lg:pb-4
          lg:flex
          lg:flex-col
          justify-between
          xl:px-6
      "
      >
        <nav className="mt-4 flex flex-col justify-between">
          <ul role="list" className="flex flex-col items-center space-y-1">
            {routes.map((item) => (
              <DesktopItem
                key={item.label}
                href={item.href}
                label={item.label}
                active={item.active}
                icon={item.icon}
                onClick={item.onClick}
              />
            ))}
          </ul>
        </nav>
        <nav className="mt-4 flex flex-col justify-between items-center">
          <div
            onClick={() => setIsOpen(true)}
            className="cursor-pointer hover:opacity-75 transition"
          >
            <Avatar user={currentUser} />
          </div>
        </nav>
      </div> 
    </>
  );
};

export default DesktopSidebar;
