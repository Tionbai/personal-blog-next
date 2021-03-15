import { articles } from "../../../data";

const handler = ({ query: { id } }, res) => {
  const filtered = articles.filter((article) => article.id === id);
  filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res
        .status(404)
        .json({ message: `Article with the ID of ${id} was not found.` });
};

export default handler;
