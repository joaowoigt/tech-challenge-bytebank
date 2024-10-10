import type { NextApiRequest, NextApiResponse } from "next";
import { isDebit, isCredit } from "@/models/Transactions";
import { mockedInitialValues } from "./Data";

export type ExtractData = {
  month: string;
  type: string;
  fullDate: string;
  value: string;
};

export default function (
  req: NextApiRequest,
  res: NextApiResponse<ExtractData[]>
) {
  const mappedList: ExtractData[] = mockedInitialValues.map((item) => {
    const mappedType = isDebit(item) ? "Transferência" : "Depósito";
    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    const formattedValue = formatter.format(item.value);
    const finalValue = `${isDebit(item) ? "- " : ""}${formattedValue}`;
    const mappedItem: ExtractData = {
      month: item.month,
      type: mappedType,
      fullDate: item.fullDate,
      value: finalValue,
    };
    return mappedItem;
  });
  res.status(200).json(mappedList);
}
