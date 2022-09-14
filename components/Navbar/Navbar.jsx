import React from "react";

const Navbar = () => {
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
  return (
    <div className="flex gap-4 my-4">
      {categories.map((category) => (
        <div key={category} className="bg-green-600 p-6 rounded-md">
          {category}
        </div>
      ))}
    </div>
  );
};

export default Navbar;