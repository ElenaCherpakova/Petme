import React from "react";
import Link from "next/link";
import { CgProfile } from 'react-icons/cg';
import { BiMenu } from 'react-icons/bi';

function ProfileSettings() {
  return (
      <div className="flex items-center gap-12">
        <Link href="/">Become a Breeder</Link>
        <button className="sm:text-3xl flex gap-1">
          <BiMenu /><CgProfile /></button>
      </div>
  )

}

export default ProfileSettings;
