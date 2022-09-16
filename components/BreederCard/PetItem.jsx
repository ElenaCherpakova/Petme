import Link from "next/link";
import PetList from "./PetList";

const PetItem = ({ pets }) => {
  console.log(pets)
  return (
    <PetList>
      {pets.length === 0 ? (
        <h1>No Data for now</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Link href="/pet/[id]" as={`/pet/${pet.id}`} key={pet.id}>
              <a target="_blank">
                <div className="rounded-lg shadow-lg bg-white max-w-sm hover:cursor-pointer">
                  <div className="bg-green-400 p-4 rounded-md">Picture</div>
                  <div className="p-4">
                    <p>Name: {pet.name}</p>
                    <p>{pet.description}</p>
                    <p>$Price: {pet.price}</p>
                    <p>{pet.gender}</p>
                    <p>{pet.description}</p>
                  </div>
                </div>
              </a>
            </Link>
          );
        })
      )}
    </PetList>
  );
};

export default PetItem;