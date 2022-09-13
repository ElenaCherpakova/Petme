import PetList from "../components/BreederCard/PetList";
import Navbar from "../components//Navbar/Navbar";
export default function Home({ pet }) {
  return (
    <div className="container mx-auto">
      <Navbar />
      <PetList pets={pet} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/Pets/pets");
  const { pet } = await res.json();

  return {
    props: {
      pet,
    },
  };
};
