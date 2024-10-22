import Text from "@/UI/components/Texts/texts";
import React, { useEffect, useState } from "react";

export default function WelcomeArea() {
  const [currentDate, setCurrentDate] = useState(getDate());
  return (
    <div className="flex flex-col">
      <Text intent="Heading" color="white" text="Olá, João :)"></Text>
      <Text intent="Small" color="white" text={currentDate} mt="big"></Text>
    </div>
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
