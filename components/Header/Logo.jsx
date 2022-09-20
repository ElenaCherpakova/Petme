import React from "react";
import { MdOutlinePets } from "react-icons/md";


function Logo() {
  return (
    <div className="flex item-center sm:text-3xl">
      <MdOutlinePets />
      <p className="block text-3xl">Pet</p><span className="text-[#568b92]">Me</span>
    </div>
  )
}

export default Logo;
