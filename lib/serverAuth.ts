import prismadb from "@/lib/prismadb";
import { IncomingMessage } from "http";
import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";

const serverAuth = async (req: NextApiRequest) => {
  const session = await getSession({ req: req as Partial<IncomingMessage> });

  if (!session?.user?.email) throw new Error("Not signed in");

  const currentUser = await prismadb.user.findUnique({
    where: { email: session.user.email },
  });

  if (!currentUser) throw new Error("Not signed in");

  return { currentUser };
};

export default serverAuth;