import Logo from "../../../components/Important/Logo";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { LuSearch } from "react-icons/lu"

const Navbar = () => {
  return (
    <div className="px-28 h-20 flex justify-between items-center">
      <div className="flex gap-8 items-center h-full">
        <HiOutlineMenuAlt1 className="text-3xl" />
        <Logo />
      </div>
      <div className="flex items-center justify-between border-2 max-h-[40px] border-dark1 rounded">
        <input
          className="px-4 outline-none"
          type="text"
          placeholder="Search for anything"
        />
        <button className="p-4 text-xl">
          <LuSearch />
        </button>
      </div>
      <div className="flex gap-8 text-3xl">
        <GoPerson />
        <BsHandbag />
      </div>
    </div>
  );
};

export default Navbar;
