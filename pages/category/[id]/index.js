import React from 'react';
import PetItem from '/components/BreederCard/PetItem';

const category = ({ category }) => {
  return (
    <div>
      <PetItem pets={category} />
    </div>
  );
};

export default category;

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `http://localhost:3000/api/category/${context.params.id}`,
  );
  const category = await res.json(res);
  // console.log(category);
  return {
    props: {
      category,
    },
  };
};
