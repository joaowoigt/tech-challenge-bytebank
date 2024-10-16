import { NextApiRequest, NextApiResponse } from "next";
import connectMongoDB from "../lib/connectDB";
import transaction from "@/domain/models/Transactions";
import mongoose from "mongoose";
import { mapTransactionFromDB } from "@/domain/mappers/transactionMapper";

export default function heandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "GET") {
    GET(req, res);
  } else if (req.method == "DELETE") {
    DELETE(req, res);
  } else {
    PUT(req, res);
  }
}

async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  await connectMongoDB();
  const id = req.query.id;
  await transaction.findByIdAndDelete(id);
  res.status(200).json({ message: "Transação deletada com sucesso" });
}

async function GET(req: NextApiRequest, res: NextApiResponse) {
  await connectMongoDB();
  const id = req.query.id;
  if (typeof id != "string") {
    res.status(500).json({ message: "Formato do id errado" });
  }
  const _id = new mongoose.Types.ObjectId(id as string);
  const item = await transaction.findOne({ _id: _id });
  const mappedItem = mapTransactionFromDB(item);
  res.status(200).json(mappedItem);
}

export type EditTransactionRequest = {
  value: number | undefined;
  type: number | undefined;
  date: string | undefined;
};

async function PUT(req: NextApiRequest, res: NextApiResponse) {
  await connectMongoDB();
  const id = req.query.id;
  const _id = new mongoose.Types.ObjectId(id as string);
  const value = req.body.value;
  const type = req.body.type;
  const date = getFullDate(req.body.date);
  const month = getMonth(req.body.date);
  await transaction.findByIdAndUpdate(_id, {
    value: value,
    kind: type,
    fullDate: date,
    month: month,
  });
  res.status(200).json({ message: "transaction edited" });
}

function getFullDate(requestDate: string): string {
  const today = new Date(requestDate);
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate() + 1;
  return `${date}/${month}/${year}`;
}

function getMonth(date: string): string {
  const _date = new Date(date);
  const month = _date.toLocaleString("default", { month: "long" });
  return month.charAt(0).toUpperCase() + month.slice(1);
}
