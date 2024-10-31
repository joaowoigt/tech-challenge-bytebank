import { TransactionResponse } from "@/data/responses/ExtractResponse";
import ExtractItem from "./ExtractItem";
import React, { useEffect, useState } from "react";

export default function ExtractList() {
  const [extractList, setExtractList] = useState<TransactionResponse[]>([]);

  useEffect(() => {
    async function getExtract() {
      try {
        const res = await fetch("/api/extract");
        if (!res.ok) {
          throw new Error("Erro ao buscar o extrato");
        }

        const data: TransactionResponse[] = await res.json();
        console.log(data);
        setExtractList(data);
      } catch (error) {
        console.log("Erro ao buscar o extrato");
      }
    }
    getExtract();
  }, []);
  return (
    <div>
      {extractList.map((item) => (
        <ExtractItem
          _id={item.id}
          month={item.month}
          type={item.type}
          fullDate={item.fullDate}
          value={item.value}
        ></ExtractItem>
      ))}
    </div>
  );
}
