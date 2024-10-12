import { TransactionResponse } from "@/data/responses/ExtractResponse";
import { isDebit } from "../models/Transactions";

export function mapTransactionFromDB(item: any): TransactionResponse {
  const mappedType = isDebit(item) ? "Transferência" : "Depósito";
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const formattedValue = formatter.format(item.value);
  const finalValue = `${isDebit(item) ? "- " : ""}${formattedValue}`;
  const mappedItem: TransactionResponse = {
    id: item._id,
    month: item.month,
    type: mappedType,
    fullDate: item.fullDate,
    value: finalValue,
  };
  return mappedItem;
}
