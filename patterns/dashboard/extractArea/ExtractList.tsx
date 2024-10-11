import ExtractItem from "./ExtractItem";
import React, { useEffect, useState } from "react";
import { ExtractData } from "@/pages/api/extract";

export default function ExtractList() {
  const [extractList, setExtractList] = useState<ExtractData[]>([]);

  useEffect(() => {
    async function getExtract() {
      try {
        const res = await fetch("/api/extract");
        if (!res.ok) {
          throw new Error("Erro ao buscar o extrato");
        }

        const data: ExtractData[] = await res.json();
        console.log(data);
        setExtractList(data);
      } catch (error) {
        console.log("Erro ao buscar o extrato");
      }
    }
    if (extractList.length == 0) {
      getExtract();
    }
  });
  return (
    <div>
      {extractList.map((item) => (
        <ExtractItem
          month={item.month}
          type={item.type}
          fullDate={item.fullDate}
          value={item.value}
        ></ExtractItem>
      ))}
    </div>
  );
}