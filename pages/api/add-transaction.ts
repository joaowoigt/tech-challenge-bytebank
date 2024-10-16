import type { NextApiRequest, NextApiResponse } from "next";
import {
  getTransactionType,
  TransactionType,
} from "@/domain/models/TransactionType";
import transaction from "@/domain/models/Transactions";
import connectMongoDB from "../lib/connectDB";
import { NextResponse } from "next/server";

export type CreateTransactionRequest = {
  value: number;
  type: number;
};

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  await connectMongoDB();
  let value = req.body.value;
  let type = req.body.type;
  console.log(value);
  console.log(type);
  if (value == null || type == null) {
    res.status(400);
  }

  await transaction.create({
    value: value,
    kind: type,
    fullDate: getFullDate(),
    month: getMonthName(),
  });
  res.status(200).json({ message: "created transaction" });
}

function getFullDate(): string {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}/${month}/${year}`;
}

function getMonthName(): string {
  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" });
  return month.charAt(0).toUpperCase() + month.slice(1);
}
