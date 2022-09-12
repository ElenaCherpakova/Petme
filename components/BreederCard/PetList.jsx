import React from "react";
import PetItem from "../BreederCard/PetItem";
const BreederList = ({ pets }) => {
  return (
    <div>
      {pets.map((pet) => (
        <PetItem pet={pet} key={pet.id} />
      ))}
    </div>
  );
};

export default BreederList;
