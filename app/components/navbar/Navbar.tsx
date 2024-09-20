import { getCurrentUser } from "@/app/actions/getCurrentUser";
import Logo from "./Logo";
import Search from "./Search";
import CardCount from "./CardCount";
import User from "./User";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = async () => {
  const currentUser = await getCurrentUser();
  return (
    <div
      className="flex justify-between items-center gap-3 
    md:gap-10 px-3 md:px-10 h-20 bg-yellow-500 text-xl  "
    >
      <Logo />
      <Search />
      <CardCount />
      <User currentUser={currentUser} />
      <HamburgerMenu />
    </div>
  );
};

export default Navbar;
