import React from "react";
import Logo from "./Logo";
import ProfileSettings from "./ProfileSettings";
import Nav from './Nav'
function Header() {
  return (
    <div className="flex justify-between items-center bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-blue-100 p-4">
      <Logo />
     <Nav/>
      <div className="flex items-center gap-4">

        <ProfileSettings />

      </div>

    </div>


  )
}
export default Header;
