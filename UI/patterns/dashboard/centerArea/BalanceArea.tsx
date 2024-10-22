import Text from "@/UI/components/Texts/texts";
import { BalanceData } from "@/pages/api/balance";
import React, { useEffect, useState } from "react";

export default function BalanceArea() {
  const [currentBalance, setCurrentBalance] = useState("");

  useEffect(() => {
    async function getBalance() {
      try {
        const res = await fetch("/api/balance");
        if (!res.ok) {
          throw new Error("Erro ao buscar o saldo");
        }

        const data: BalanceData = await res.json();
        console.log(data.value);
        setCurrentBalance(data.value);
      } catch (error) {
        console.log("Erro ao buscar o saldo");
      }
    }
    getBalance();
  });

  return (
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
      <Text intent="ExtraHeading" color="white" text={currentBalance}></Text>
    </div>
  );
}
