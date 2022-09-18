import Link from "next/link";
import { useState } from "react";

const Navbar = ({ onClickCategoryName }) => {
  const categories = [
    "Dog",
    "Cat",
    "Rabbit",
    "Horse",
    "Chicken",
    "Guinea pig",
    "Turtle",
    "Lizard",
    "Fish",
  ];
  // onClickCategoryName(setName());

  return (
    <div className="flex gap-4 my-4">
      {categories.map((category) => (
        <div
          onClick={() => onClickCategoryName(category)}
          key={category}
          className="bg-green-600 p-6 rounded-md hover:cursor-pointer"
        >
          {category}
        </div>
      ))}
    </div>
  );
};

// export const getServerSideProps = async (context) => {
//   console.log(context);
//   const res = await fetch(
//     `http://localhost:3000/api/category/${context.params.id}`
//   );
//   const pet = await res.json(res);
//   return {
//     props: {
//       pet,
//     },
//   };
// };

export default Navbar;
