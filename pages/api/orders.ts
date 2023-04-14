import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

// POST /api/orders
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const order = req.body;
  console.log(order);

  const MONGODB_URI = process.env.MONGODB_URI!;

	const mongoClient = await MongoClient.connect(MONGODB_URI);
  const db = mongoClient.db();

  const ordersCollection = db.collection('orders');
  const result = await ordersCollection.insertOne(order);

  console.log(result);

  mongoClient.close();

  res.status(201).json({ message: 'Order registered successfully!'});
};

export default handler;
