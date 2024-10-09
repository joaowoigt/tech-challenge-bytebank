import Text from "@/components/Texts/texts";
import React, { useState } from "react";

export default function DashboardCenterArea() {
  const [currentDate, setCurrentDate] = useState(getDate());
  return (
    <section className="bg-primary h-[420px] rounded-2xl flex flex-row w-[50%] mx-big justify-between p-big">
      <div className="flex flex-col">
        <Text intent="Heading" color="white" text="Olá, João :)"></Text>
        <Text intent="Small" color="white" text={currentDate} mt="big"></Text>
      </div>
      <div className="flex flex-col w-[50%] my-auto">
        <div className="flex flex-row items-center">
          <Text intent="Regular" color="white" text="Saldo"></Text>
          <svg
            className="w-6 h-6 text-negative ml-big"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div className="bg-negative w-[180px] h-[1px] my-medium"></div>
        <Text intent="Small" color="white" text="Conta corrente"></Text>
        <Text intent="ExtraHeading" color="white" text="R$ 2.500,00"></Text>
      </div>
    </section>
  );
}

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const dayNumber = today.getDay();
  const weekDay = weekday[dayNumber];
  return `${weekDay}, ${month}/${date}/${year}`;
}

const weekday: string[] = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sabado",
  "Domingo",
];