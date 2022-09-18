import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import PetItem from '../components/BreederCard/PetItem';
import Header from '../components/Header/Header';

export default function Home() {
  const [pets, setPets] = useState([]);
  const [category, setCategory] = useState('Dog');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/category/${category}`,
        );
        const data = await res.json();
        setPets(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [category]);

  const handleClick = (name) => {
    setCategory(name);
  };

  return (
    <>
      <Header />
      <div className='container mx-auto'>
        <Navbar onClickCategoryName={handleClick} />
        <PetItem pets={pets} />
      </div>
    </>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch(`http://localhost:3000/api/Pets/pets/`);
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
