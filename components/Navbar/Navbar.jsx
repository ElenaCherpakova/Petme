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
    <div className="text-[#568b92] px-10 flex justify-between items-center">
      <div className="flex items-center space-x-20">
        {categories.map(({ id, label, icon }) => {
          return <div onClick={() => onClickCategoryName(label)} key={id} >
            <div className="flex flex-col justify-between items-center p-6 rounded-lg hover:cursor-pointer hover:text-[#dbfaff] hover:bg-[#568b92]">
              <span className="h-6 w-6">{icon}</span>
              <p className="text-sm font-light">{label}</p>
            </div>
          </div>
        })}
      </div>


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