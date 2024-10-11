import type { NextApiRequest, NextApiResponse } from "next";
import transaction, { isDebit, isCredit } from "@/models/Transactions";
import connectMongoDB from "../lib/connectDB";

export type ExtractData = {
  id: string;
  month: string;
  type: string;
  fullDate: string;
  value: string;
};

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<ExtractData[]>
) {
  await connectMongoDB();
  const extract = await transaction.find();
  const mappedList: ExtractData[] = extract.map((item) => {
    const mappedType = isDebit(item) ? "Transferência" : "Depósito";
    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    const formattedValue = formatter.format(item.value);
    const finalValue = `${isDebit(item) ? "- " : ""}${formattedValue}`;
    const mappedItem: ExtractData = {
      id: item._id,
      month: item.month,
      type: mappedType,
      fullDate: item.fullDate,
      value: finalValue,
    };
    console.log(mappedItem.id);
    return mappedItem;
  });
  res.status(200).json(mappedList);
}
