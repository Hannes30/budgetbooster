import fragen from "../../../public/fragen.json";
export default async function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(fragen);
  } else {
    res.status(405).end();
  }
}
