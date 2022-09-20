import React from "react";
import Logo from "./Logo";
import ProfileSettings from "./ProfileSettings";
// import Nav from './Nav';

function Header() {
  return (

    <div className="bg-white border-gray-200 sm:px-4 py-2.5 rounded bg-[#dbfaff]">
      <div className="w-full h-10 items-center px-8 flex justify-between">
        <Logo />
        <ProfileSettings />
      </div>
    </div>
  );

}
export default Header;
