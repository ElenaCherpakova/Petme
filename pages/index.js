import PetList from "../components/BreederCard/PetList";
export default function Home({ pet }) {
  console.log(pet);
  return (
    <div>
      <PetList pets={pet} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/breeder/test");
  const { pet } = await res.json();

  return {
    props: {
      pet,
    },
  };
};
