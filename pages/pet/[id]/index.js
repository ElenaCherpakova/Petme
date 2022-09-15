import React from "react";
import Link from "next/link";

const pet = ({ pet }) => {
  return (
    <div className="bg-yellow-600 rounded-md hover:cursor-pointer shadow-lg container mx-auto my-4">
      <div className="bg-blue-500 p-8 rounded-md">Picture</div>
      <div className="p-5">
        <h3>{pet.name}</h3>
        <p>{pet.description}</p>
        <p>{pet.dateOfBirth}</p>
        <p>{pet.gender}</p>
        <p>{pet.price}</p>
      </div>
    </div>
  );
};

export default pet;

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `http://localhost:3000/api/pets/${context.params.id}`
  );
  const pet = await res.json(res);
  return {
    props: {
      pet,
    },
  };
};

//
