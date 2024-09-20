import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex bg-yellow-500 gap-3 md:gap-10 px-3 md:px-10 h-16 items-center justify-between mt-3">
      <Link href="/" className="font-bold text-xl">
        ORKUN
      </Link>
      <div className="flex text-2xl gap-3 md:gap-10">
        <FaFacebook />
        <BsTwitterX />
        <Link href="https://github.com/0rkun">
          <FaGithub />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
