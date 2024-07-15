import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Logo from "/Logo.png"
import { Link } from "react-router-dom";

function CustomNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-2 ml-10 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-white">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/" className="flex items-center font-semibold  text-base  group relative transition duration-300  text-white hover:text-basic group hover:font-semibold ">
          Home
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-basic transition-all duration-500 transform origin-left scale-x-0 group-hover:scale-x-100"></span>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/postbanner" className="flex items-center font-semibold  text-base  group relative transition duration-300  text-white hover:text-basic group hover:font-semibold ">
          Post a job
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-basic transition-all duration-500 transform origin-left scale-x-0 group-hover:scale-x-100"></span>
        </Link>
      </Typography>
      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center font-bold  text-base">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center font-bold  text-base">
          Docs
        </a>
      </Typography> */}
    </ul>
  );

  return (
    <div className=" max-h-[768px] w-full">
      <Navbar className="sticky h-max max-w-full rounded-none px-4 bg-gradient-to-l from-secondary1 via-secondary to-primary1 ">
        <div className="flex items-center justify-between text-blue-gray-900 ml-4 ">
          <img src={Logo} className="h-16 w-40" alt="" srcset="" />
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block  text-base"
              >
                <Link to="/signin" className="flex items-center font-semibold  text-base  group relative transition duration-300 text-white hover:text-basic group ">
                  Signup/Signin
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-basic transition-all duration-500 transform origin-left scale-x-0 group-hover:scale-x-100"></span>
                </Link>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className=" text-base">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className=" text-base">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}
export default CustomNavbar;