import React from "react";
import { PrismaClient } from "@prisma/client";
import Card from "@components/Card.js";
import Searchbar from "@components/Searchbar.js";


const prisma = new PrismaClient();

async function main() {}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

async function Recipes() {
  let meals = await prisma.meals.findMany();
  let cards = meals;
  return (
    <section className="sm:mx-[10%] top-[1.5rem] mt-[0.2rem] relative sm:top-48 sm:mt-8 ">
      
      <Searchbar />
      <div className="relative top-24 sm:top-0 container w-[auto] grid sm:grid-cols-2 grid-cols-1 gap-4 mt-32 sm:mt-8 place-content-center">
        {cards.map((meal, k) => (
          <div key={k} className="sm:px-3 px-0 col-span-1 flex flex-col">
            <Card
              imgSrc={meal?.image}
              title={meal?.meal}
              description={meal?.description}
              recipe={meal?.recipe}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Recipes;

