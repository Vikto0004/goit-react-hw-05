import { Link } from "react-router-dom";

export default function MovieItem({ data }) {
  return (
    <li>
      <Link to={"/movies/" + data.id}>{data.original_title}</Link>
    </li>
  );
}
