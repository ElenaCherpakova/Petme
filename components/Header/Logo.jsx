import React from "react";
import { MdOutlinePets } from "react-icons/md";

function Logo() {
  return (
    <div className="px-2 flex justify-between">
      <div className="flex item-center sm:text-3xl">
        <MdOutlinePets />
        <span className="block text-3xl">PetMe</span>
      </div>
    </div>

  )
}

export default Logo;
