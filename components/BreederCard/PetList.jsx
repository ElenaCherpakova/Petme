import React from "react";
import PetItem from "../BreederCard/PetItem";
const BreederList = ({ pets }) => {
  return (
    <div className="grid grid-cols-5 gap-4 my-8">
      {pets.map((pet) => (
        <PetItem pet={pet} key={pet.id} />
      ))}
    </div>
  );
};

export default BreederList;
