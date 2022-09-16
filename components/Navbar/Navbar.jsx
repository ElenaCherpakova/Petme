import Link from "next/link";

const Navbar = () => {
  const categories = [
    "All",
    "Dog",
    "Cat",
    "Rabbit",
    "Horse",
    "Chicken",
    "Guinea pig",
    "Turtle",
    "Lizard",
    "Fish",
  ];

  const clickHandler = () => {
    console.log("Clicked");
  };

  return (
    <div className="flex gap-4 my-4">
      {categories.map((category) => (
        <Link key={category} href="category/[id]" as={`category/${category}`}>
          <div
            onClick={clickHandler}
            key={category}
            className="bg-green-600 p-6 rounded-md hover:cursor-pointer"
          >
            {category}
          </div>
        </Link>
      ))}
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