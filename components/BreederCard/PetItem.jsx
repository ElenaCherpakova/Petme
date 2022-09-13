import Link from "next/link";
const PetItem = ({ pet }) => {
  return (
    <Link href="/pet/[id]" as={`/pet/${pet.id}`}>
      <div className="bg-yellow-600 rounded-md hover:cursor-pointer shadow-lg">
        <div className="bg-blue-500 p-8 rounded-md">Picture</div>
        <div className="p-5">
          <h3>{pet.name}</h3>
          <p>{pet.description}</p>
          <p>{pet.dateOfBirth}</p>
          <p>{pet.gender}</p>
          <p>{pet.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default PetItem;
