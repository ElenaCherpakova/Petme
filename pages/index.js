import PetItem from "../components/BreederCard/PetItem";
import Navbar from "../components//Navbar/Navbar";
import { useState, useEffect } from "react";

export default function Home({ pet }) {
  const [pets, setPets] = useState([]);
  const [category, setCategoryName] = useState("Dog");

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:3000/api/category/${category}`);
      const data = await res.json();
      setPets(data);
    };
    getData();
  }, [category]);

  const getCategoryName = (name) => {
    setCategoryName(name);
  };

  return (
    <div className="container mx-auto">
      <Navbar onClickCategoryName={getCategoryName} />
      {category}

      <PetItem pets={pets} />
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const res = await fetch(`http://localhost:3000/api/category/${category}`);
//   const category = await res.json(res);
//   return {
//     props: {
//       category,
//     },
//   };
// };

// export const getStaticProps = async () => {
//   const res = await fetch(`http://localhost:3000/api/pets/pets/`);
//   const { pet } = await res.json();
//   console.log(pet);
//   return {
//     props: {
//       pet,
//     },
//   };
// };

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `http://localhost:3000/api/Pets/pets/${context.params.id}`
//   );
//   const { pet } = await res.json();

//   return {
//     props: {
//       pet,
//     },
//   };
// };
