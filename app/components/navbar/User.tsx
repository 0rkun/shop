"use client";

import type { User } from "@prisma/client";
import { useState } from "react";
import { LuUser2 } from "react-icons/lu";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

interface UserProps {
  currentUser: User | null | undefined | any;
}

const User: React.FC<UserProps> = ({ currentUser }) => {
  const router = useRouter();

  const [openMenu, setOpenMenu] = useState(false);

  // console.log(currentUser);

  const menuFunc = (type: any) => {
    setOpenMenu(false);
    if (type == "logout") {
      signOut();
      router.push("/login");
    } else if (type == "register") {
      router.push("/register");
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="hidden md:flex relative">
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className="flex items-center gap-2 cursor-pointer"
      >
        <LuUser2 size="30" />
        <div> {currentUser ? currentUser.name : "User"} </div>
      </div>
      {openMenu && (
        <div className="absolute w-[150px] top-10 bg-white shadow-lg right-0 p-2 rounded-mds">
          {currentUser ? (
            <div>
              <div onClick={() => router.push("/admin")}>Admin</div>
              <div
                className="cursor-pointer"
                onClick={() => menuFunc("logout")}
              >
                LogOut
              </div>
            </div>
          ) : (
            <div>
              <div onClick={() => menuFunc("register")}>Register</div>
              <div onClick={() => menuFunc("login")}>Login</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default User;
