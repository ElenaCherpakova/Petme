// import Link from "next/link";
import {
  GiCat,
  GiSittingDog,
  GiRabbit, 
  GiHorseHead, 
  GiChicken, 
  GiPig, 
  GiSeaTurtle, 
  GiLizardTongue,
  GiTropicalFish
} from "react-icons/gi";


const categories = [
  { id: 1, label: "Cat", icon: <GiCat size={24} /> },
  { id: 2, label: "Dog", icon: <GiSittingDog size={24} /> },
  { id: 3, label: "Rabbit", icon: <GiRabbit size={24} /> },
  { id: 4, label: "Horses", icon: <GiHorseHead size={24} /> },
  { id: 5, label: "Chickens", icon: <GiChicken size={24} /> },
  { id: 6, label: "Guinea pigs", icon: <GiPig size={24} /> },
  { id: 7, label: "Lizard", icon: <GiLizardTongue size={24} /> },
  { id: 8, label: "Turtles", icon: <GiSeaTurtle size={24} /> },
  { id: 9, label: "Fish", icon: <GiTropicalFish size={24} /> },
]


const Navbar = ({ onClickCategoryName }) => {

  return (
    <div className="flex gap-4 my-4">
      {categories.map(({ id, label, icon }) => {
        return <button onClick={() => onClickCategoryName(label)} key={id} className="bg-blue-100 p-6 rounded-md hover:cursor-pointer"><span>{icon}</span>{label}</button>

      })}
    </div>
  );
};

// export const getServerSideProps = async (context) => {
//   console.log(context);
//   const res = await fetch(
//     `http://localhost:3000/api/category/${context.params.id}`
//   );
//   const pet = await res.json(res);
//   return {
//     props: {
//       pet,
//     },
//   };
// };

export default Navbar;