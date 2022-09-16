import PetItem from '../../../components/PetItem';
import Navbar from '../../../components/Navbar/Navbar';
export default function Home({ pet }) {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <PetItem pets={pet} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/pets/pets/`);
  const { pet } = await res.json();
  // console.log(pet);
  return {
    props: {
      pet,
    },
  };
};

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
