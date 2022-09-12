const PetItem = ({ pet }) => {
  return (
    <div className="bg-yellow-600">
      <h3>{pet.name}</h3>
      <p>{pet.description}</p>
      <p>{pet.dateOfBirth}</p>
      <p>{pet.gender}</p>
      <p>{pet.price}</p>
    </div>
  );
};

export default PetItem;
