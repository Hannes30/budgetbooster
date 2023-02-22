import sources from "../../../sources.json";
export default async function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(sources);
  } else {
    res.status(405).end();
  }
}
