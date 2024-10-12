import { NextApiRequest, NextApiResponse } from "next";
import connectMongoDB from "../lib/connectDB";

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  await connectMongoDB();
  let id = req.body.id;
}
