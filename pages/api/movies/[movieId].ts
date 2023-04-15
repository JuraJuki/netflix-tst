import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") return res.status(405).end();

  try {
    await serverAuth(req, res);

    const { movieId } = req.query;

    if (typeof movieId !== "string" || !movieId) throw new Error("Invalid ID");

    const movie = await prismadb.movie.findUnique({ where: { id: movieId } });

    if (!movie) throw new Error("Invalid ID");

    return res.status(200).json(movie);
  } catch (err) {
    console.log(err);
    return res.status(400).end();
  }
};

export default handler;
