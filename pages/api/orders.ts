import { NextApiRequest, NextApiResponse } from "next";

// POST /api/orders
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const order = req.body;

  console.log(order);
};

export default handler;
