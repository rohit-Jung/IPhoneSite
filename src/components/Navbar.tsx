import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-8 sm:px-10 px-5 flex justify-between items-center ">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} width={14} height={18} alt="Apple" />
        <div className="flex flex-1 justify-center max-sm:hidden text-sm">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-gray hover:text-white transition-all cursor-pointer"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} width={18} height={18} alt="searchImage" />
          <img src={bagImg} width={18} height={18} alt="bagImage" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
