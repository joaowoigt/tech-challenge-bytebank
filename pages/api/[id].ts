import { NextApiRequest, NextApiResponse } from "next";
import connectMongoDB from "../lib/connectDB";
import transaction from "@/domain/models/Transactions";
import mongoose from "mongoose";
import { mapTransactionFromDB } from "@/domain/mappers/transactionMapper";

export default function heandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "GET") {
    GET(req, res);
  } else {
    DELETE(req, res);
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
